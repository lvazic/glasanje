import {ChangeDetectionStrategy, Component, ViewChild} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';

import {PDFDocument, PDFFont, PDFImage, PDFPage, rgb} from 'pdf-lib';
import fontkit from '@pdf-lib/fontkit'

import * as download from 'downloadjs';
import {SignaturePad} from 'angular2-signaturepad';
import {
  ContentType,
  ContentWriteSpec,
  getContentWriteSpec,
  PollingStation,
  STATIONS_BY_COUNTRY,
  VotingCountry
} from "./constants";
import {map, startWith} from 'rxjs/operators';

const MAX_ADDRESS_LINE_CHAR_LENGTH = 55;

@Component({
  selector: 'glasanje-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {displayDefaultIndicatorType: false},
    },
  ],
})
export class FormComponent {

  readonly countries = [...STATIONS_BY_COUNTRY.keys()];
  readonly countryToStations = new Map(Array.from(STATIONS_BY_COUNTRY).map(
    ([country, stations]) => [country.countryCode, stations]));
  readonly dtf = new Intl.DateTimeFormat('en', {year: 'numeric', month: 'numeric', day: '2-digit'});
  @ViewChild(SignaturePad) signaturePad: SignaturePad;

  readonly personalInfoForm = this.fb.group({
    'ime': this.fb.control('', [Validators.required]),
    'datumRodjenja': this.fb.control('', [Validators.required]),
    'mestoRodjenja': this.fb.control('', [Validators.required]),
    'pol': this.fb.control('', [Validators.required]),
    'imeRoditelja': this.fb.control('', [Validators.required]),
    'jmbg': this.fb.control('', [
      Validators.required,
      Validators.pattern("^[0-9]*$"),
      Validators.minLength(13),
      Validators.maxLength(13),
    ]),
    'adresaPrebivalista': this.fb.control('', [Validators.required]),
    'adresaPrebivalistaInternoRaseljeni': this.fb.control(''),
    'email': this.fb.control('', [Validators.required, Validators.email]),
    'telefon': this.fb.control('', [Validators.required]),
  });

  readonly foreignVotingInfoForm = this.fb.group({
    'brojPasosa': this.fb.control('', [
      Validators.required,
      Validators.pattern("^[0-9]*$"),
    ]),
    'drzavaPrebivalista': this.fb.control('', [Validators.required]),
    'trenutnaLokacija': this.fb.control('', [Validators.required]),
    'izbornoMesto': this.fb.control('', [Validators.required]),
    'adresaPrebivalista': this.fb.control('', [Validators.required]),
    'zeljenoIzbornoMesto': this.fb.control(''),
  });

  readonly filteredOptions$ = this.foreignVotingInfoForm.get('drzavaPrebivalista')!.valueChanges.pipe(
    startWith(''), map((val) => this.filter(val)));
  readonly pollingStations$ = this.foreignVotingInfoForm.get('drzavaPrebivalista')!.valueChanges.pipe(
    startWith([]), map((val) => this.getPollingStations(val)));

  readonly signaturePadOptions = {
    'canvasHeight': 200,
    'canvasWidth': 400,
  };

  signatureSet = false;
  signature = '';
  formDownloaded = false;
  private

  constructor(private readonly fb: FormBuilder) {
    this.pollingStations$.subscribe((stations) => {
      if (stations.length === 1) {
        this.foreignVotingInfoForm.get('izbornoMesto')!.setValue(stations[0]);
      }
    });
  }

  getLocationLabel(location: PollingStation) {
    return location.labelCyr;
  }

  drawComplete() {
    this.signature = this.signaturePad.toDataURL();
  }

  drawStart() {
    this.signatureSet = true;
  }

  eraseSignature() {
    this.signaturePad.clear();
  }

  async generateApplication() {
    const robotoUrl = 'assets/Roboto-Regular.ttf';
    const fontBytes = await fetch(robotoUrl).then((res) => res.arrayBuffer());

    const documentUrl = 'assets/VotingRequestDocument.pdf';
    const existingPdfBytes = await fetch(documentUrl).then(res => res.arrayBuffer());

    const pdfDoc = await PDFDocument.load(existingPdfBytes);
    pdfDoc.registerFontkit(fontkit);
    const robotoFont = await pdfDoc.embedFont(fontBytes);

    const pages = pdfDoc.getPages();
    const firstPage = pages[0];

    const ime = this.personalInfoForm.get('ime').value;
    this.writeContent(ime, getContentWriteSpec(ContentType.FULL_NAME), firstPage, robotoFont);
    this.writeContent(ime, getContentWriteSpec(ContentType.SIGN_NAME), firstPage, robotoFont);

    const datumRodjenja = this.getDateString(this.personalInfoForm.get('datumRodjenja').value);
    this.writeContent(datumRodjenja, getContentWriteSpec(ContentType.DATE_OF_BIRTH), firstPage, robotoFont);

    const pol = this.personalInfoForm.get('pol').value;
    this.writeContent(pol, getContentWriteSpec(ContentType.GENDER), firstPage, robotoFont);

    const imeRoditelja = this.personalInfoForm.get('imeRoditelja').value;
    this.writeContent(imeRoditelja, getContentWriteSpec(ContentType.PARENT_NAME), firstPage, robotoFont);

    // Special case of incremental write.
    const jmbg = this.personalInfoForm.get('jmbg').value;
    const cifre = jmbg.split('');
    let initialX = 303;
    for (const cifra of cifre) {
      firstPage.drawText(cifra, {
        x: initialX,
        y: 525,
        font: robotoFont,
        size: 10,
        color: rgb(0, 0, 0),
      });
      initialX += 17.3;
    }

    const brojPasosa = this.foreignVotingInfoForm.get('brojPasosa').value;
    this.writeContent(brojPasosa, getContentWriteSpec(ContentType.PASSPORT_NUMBER), firstPage, robotoFont);

    const adresaPrebivalista = this.personalInfoForm.get('adresaPrebivalista').value;
    this.writeContent(adresaPrebivalista, getContentWriteSpec(ContentType.SERBIAN_ADDRESS), firstPage, robotoFont);

    const adresaPrebivalistaInternoRaseljeni = this.personalInfoForm.get('adresaPrebivalistaInternoRaseljeni').value;
    if (adresaPrebivalistaInternoRaseljeni) {
      this.writeContent(adresaPrebivalistaInternoRaseljeni,
        getContentWriteSpec(ContentType.INTERNALLY_DISPLACED_ADDRESS), firstPage, robotoFont);
    }

    const drzavaPrebivalista: VotingCountry = this.foreignVotingInfoForm.get('drzavaPrebivalista').value;
    this.writeContent(drzavaPrebivalista.labelCyr,
      getContentWriteSpec(ContentType.FOREIGN_COUNTRY), firstPage, robotoFont);

    const stranaAdresaPrebivalista = this.foreignVotingInfoForm.get('adresaPrebivalista').value;
    this.writeContent(stranaAdresaPrebivalista,
      getContentWriteSpec(ContentType.FOREIGN_ADDRESS), firstPage, robotoFont);

    const izbornoMesto: PollingStation = this.foreignVotingInfoForm.get('izbornoMesto').value;
    const zeljenoIzbornoMesto = this.foreignVotingInfoForm.get('zeljenoIzbornoMesto').value;
    this.writeContent(zeljenoIzbornoMesto ? zeljenoIzbornoMesto : izbornoMesto.embassyCyr,
      getContentWriteSpec(ContentType.POLL_STATION), firstPage, robotoFont);

    const trenutnaLokacija = this.foreignVotingInfoForm.get('trenutnaLokacija').value;
    this.writeContent(trenutnaLokacija, getContentWriteSpec(ContentType.SIGN_PLACE), firstPage, robotoFont);

    const datum = this.getDateString(new Date());
    this.writeContent(datum, getContentWriteSpec(ContentType.SIGN_DATE), firstPage, robotoFont);

    const signatureImage = await pdfDoc.embedPng(this.signature);
    this.writeContent(signatureImage, getContentWriteSpec(ContentType.SIGNATURE), firstPage, robotoFont);

    const telefon = this.personalInfoForm.get('telefon').value;
    const email = this.personalInfoForm.get('email').value;

    const kontaktInfo = `${telefon} / ${email}`;
    this.writeContent(kontaktInfo, getContentWriteSpec(ContentType.PHONE_EMAIL), firstPage, robotoFont);

    const pdfBytes = await pdfDoc.save();
    download(pdfBytes, "Zahtev za glasanje 2020.pdf", "application/pdf");
  }

  sendEmail() {
    const izbornoMesto: PollingStation = this.foreignVotingInfoForm.get('izbornoMesto')!.value;
    const to = izbornoMesto.email;
    const subject = 'Registracija za glasanje iz inostranstva';
    const body = 'Poštovani, \nPrilažem moje podatke za registraciju za glasanje iz inostranstva. \nSa poštovanjem';
    window.open(`mailto:${to}?subject=${subject}&body=${body}`, "_blank");
  }

  async testApplication() {
    const robotoUrl = 'assets/Roboto-Regular.ttf';
    const fontBytes = await fetch(robotoUrl).then((res) => res.arrayBuffer());

    const documentUrl = 'assets/VotingRequestDocument.pdf';
    const existingPdfBytes = await fetch(documentUrl).then(res => res.arrayBuffer());

    const pdfDoc = await PDFDocument.load(existingPdfBytes);
    pdfDoc.registerFontkit(fontkit);
    const robotoFont = await pdfDoc.embedFont(fontBytes);

    const pages = pdfDoc.getPages();
    const firstPage = pages[0];

    const ime = 'Ime Prezime';
    firstPage.drawText(ime, {
      x: 300,
      y: 615,
      font: robotoFont,
      size: 10,
      color: rgb(0, 0, 0),
    });
    firstPage.drawText(ime, {
      x: 350,
      y: 215,
      font: robotoFont,
      size: 10,
      color: rgb(0, 0, 0),
    });

    firstPage.drawText('14.09.1992.', {
      x: 300,
      y: 590,
      font: robotoFont,
      size: 10,
      color: rgb(0, 0, 0),
    });

    const pol = 'Pol';
    firstPage.drawText(pol, {
      x: 300,
      y: 565,
      font: robotoFont,
      size: 10,
      color: rgb(0, 0, 0),
    });

    const imeRoditelja = 'Ime roditelja';
    firstPage.drawText(imeRoditelja, {
      x: 300,
      y: 544,
      font: robotoFont,
      size: 10,
      color: rgb(0, 0, 0),
    });

    const jmbg = '1409992710135';
    const cifre = jmbg.split('');
    let initialX = 303;
    for (const cifra of cifre) {
      firstPage.drawText(cifra, {
        x: initialX,
        y: 525,
        font: robotoFont,
        size: 10,
        color: rgb(0, 0, 0),
      });
      initialX += 17.3;
    }

    const brojPasosa = '33334444';
    firstPage.drawText(brojPasosa, {
      x: 300,
      y: 495,
      font: robotoFont,
      size: 10,
      color: rgb(0, 0, 0),
    });

    const adresaPrebivalista = 'Bulevar Arsenija Carnojevica 175, Novi Beograd, 11000 Beograd, Srbija';
    const domesticAddressLines = this.getAddressLines(adresaPrebivalista);
    if (!domesticAddressLines[1]) {
      firstPage.drawText(adresaPrebivalista, {
        x: 300,
        y: 470,
        font: robotoFont,
        size: 10,
        color: rgb(0, 0, 0),
      });
    } else {
      firstPage.drawText(domesticAddressLines[0], {
        x: 300,
        y: 475,
        font: robotoFont,
        size: 10,
        color: rgb(0, 0, 0),
      });
      firstPage.drawText(domesticAddressLines[1], {
        x: 300,
        y: 465,
        font: robotoFont,
        size: 10,
        color: rgb(0, 0, 0),
      });

      const adresaPrebivalistaInternoRaseljeni = 'Adresa za interno raseljene 175, Novi Beograd, 11000 Beograd, Srbija';
      const displacedAddressLines = this.getAddressLines(adresaPrebivalistaInternoRaseljeni);
      if (adresaPrebivalistaInternoRaseljeni) {
        if (!displacedAddressLines[1]) {
          firstPage.drawText(adresaPrebivalistaInternoRaseljeni, {
            x: 300,
            y: 435,
            font: robotoFont,
            size: 10,
            color: rgb(0, 0, 0),
          });
        } else {
          firstPage.drawText(displacedAddressLines[0], {
            x: 300,
            y: 440,
            font: robotoFont,
            size: 10,
            color: rgb(0, 0, 0),
          });
          firstPage.drawText(displacedAddressLines[1], {
            x: 300,
            y: 430,
            font: robotoFont,
            size: 10,
            color: rgb(0, 0, 0),
          });
        }
      }

      const drzavaPrebivalista = 'Sjedinjene Americke Drzave';
      firstPage.drawText(drzavaPrebivalista, {
        x: 300,
        y: 395,
        font: robotoFont,
        size: 10,
        color: rgb(0, 0, 0),
      });

      const stranaAdresaPrebivalista = '100 North Whisman Road, Apartment 3423, Mountain View, 94043 California';
      const foreignAddressLines = this.getAddressLines(stranaAdresaPrebivalista);


      if (!foreignAddressLines[1]) {
        firstPage.drawText(stranaAdresaPrebivalista, {
          x: 300,
          y: 360,
          font: robotoFont,
          size: 10,
          color: rgb(0, 0, 0),
        });
      } else {
        firstPage.drawText(foreignAddressLines[0], {
          x: 300,
          y: 365,
          font: robotoFont,
          size: 10,
          color: rgb(0, 0, 0),
        });
        firstPage.drawText(foreignAddressLines[1], {
          x: 300,
          y: 355,
          font: robotoFont,
          size: 10,
          color: rgb(0, 0, 0),
        });

      }
      const izbornoMesto = 'Ambasada koja je izabrana u prethodnom koraku';
      const zeljenoIzbornoMesto = '';
      firstPage.drawText(zeljenoIzbornoMesto ? zeljenoIzbornoMesto : izbornoMesto, {
        x: 300,
        y: 320,
        font: robotoFont,
        size: 10,
        color: rgb(0, 0, 0),
      });

      const trenutnaLokacija = 'Mountain View';
      firstPage.drawText(trenutnaLokacija, {
        x: 140,
        y: 265,
        font: robotoFont,
        size: 10,
        color: rgb(0, 0, 0),
      });

      const datum = this.getDateString(new Date());
      firstPage.drawText(datum, {
        x: 240,
        y: 265,
        font: robotoFont,
        size: 10,
        color: rgb(0, 0, 0),
      });

      const telefon = '650 314 8410';
      const email = 'dugacakemail@dugacakdomen.com';

      const kontaktInfo = `${telefon} / ${email}`;
      firstPage.drawText(kontaktInfo, {
        x: 350,
        y: 175,
        font: robotoFont,
        size: 10,
        color: rgb(0, 0, 0),
      });

      const pdfBytes = await pdfDoc.save();
      download(pdfBytes, "Zahtev za glasanje 2020.pdf", "application/pdf");
    }
  }

  private writeContent(content: string | PDFImage, spec: ContentWriteSpec, page: PDFPage, font: PDFFont) {
    if (content instanceof PDFImage) {
      const contentDims = content.scale(0.25);
      page.drawImage(content, {
        x: 450,
        y: 200,
        width: contentDims.width,
        height: contentDims.height,
      });
      return;
    }
    if (!spec.isAddress) {
      page.drawText(content, {
        x: spec.x,
        y: spec.y,
        font: font,
        size: 10,
        color: rgb(0, 0, 0),
      });
      return;
    }
    const addressLines = this.getAddressLines(content);
    if (!addressLines[1]) {
      page.drawText(content, {
        x: spec.x,
        y: spec.y,
        font: font,
        size: 10,
        color: rgb(0, 0, 0),
      });
    } else {
      page.drawText(addressLines[0], {
        x: 300,
        y: spec.y + 5,
        font: font,
        size: 10,
        color: rgb(0, 0, 0),
      });
      page.drawText(addressLines[1], {
        x: 300,
        y: spec.y - 5,
        font: font,
        size: 10,
        color: rgb(0, 0, 0),
      });
    }
  }

  private getAddressLines(address: string): [string, string | undefined] {
    if (address.length < MAX_ADDRESS_LINE_CHAR_LENGTH) {
      return [address, undefined];
    }
    const addressSegments = address.split(',');
    let buffer = '';
    let bufferCharLength = 0;
    let index = 0;
    for (const segment of addressSegments) {
      buffer += `${segment}, `;
      bufferCharLength += segment.length;
      index++;
      if (bufferCharLength > MAX_ADDRESS_LINE_CHAR_LENGTH
        || (bufferCharLength + addressSegments[index].length) > MAX_ADDRESS_LINE_CHAR_LENGTH) {
        break;
      }
    }
    return [buffer.trim(), addressSegments.slice(index, addressSegments.length).join(',').trim()];
  }

  private getDateString(date: Date): string {
    const [{value: mo}, , {value: da}, , {value: ye}] = this.dtf.formatToParts(date);
    return `${da}.${mo}.${ye}.`;
  }

  private filter(filter: string): VotingCountry[] {
    if (typeof filter !== 'string') {
      return;
    }
    const filterString = filter.toLowerCase();
    return this.countries.filter((location) =>
      location.label.toLowerCase().includes(filterString)
      || location.labelCyr.toLowerCase().includes(filterString)
    );
  }

  private getPollingStations(country: VotingCountry): PollingStation[] {
    return this.countryToStations.get(country.countryCode) || [];
  }
}
