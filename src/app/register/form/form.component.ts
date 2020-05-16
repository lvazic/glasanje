import {ChangeDetectionStrategy, Component, ViewChild} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';

import {PDFDocument, rgb} from 'pdf-lib';
import fontkit from '@pdf-lib/fontkit'

import * as download from 'downloadjs';
import {SignaturePad} from 'angular2-signaturepad';
import {POLLING_STATIONS, PollingStation} from "./constants";
import {map, startWith} from 'rxjs/operators';

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

  readonly locations = POLLING_STATIONS;
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
    'trenutnaLokacija': this.fb.control('', [Validators.required]),
    'izbornoMesto': this.fb.control('', [Validators.required]),
    'adresaPrebivalista': this.fb.control('', [Validators.required]),
    'zeljenoIzbornoMesto': this.fb.control(''),
  });

  readonly filteredOptions$ = this.foreignVotingInfoForm.get('izbornoMesto')!.valueChanges.pipe(startWith(''), map((val) => this.filter(val)));

  readonly signaturePadOptions = {
    'canvasHeight': 200,
    'canvasWidth': 400,
  };

  signatureSet = false;
  signature = '';
  formDownloaded = false;

  constructor(private readonly fb: FormBuilder) {
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

    const datumRodjenja = this.personalInfoForm.get('datumRodjenja').value;
    firstPage.drawText(this.getDateString(datumRodjenja), {
      x: 300,
      y: 590,
      font: robotoFont,
      size: 10,
      color: rgb(0, 0, 0),
    });

    const pol = this.personalInfoForm.get('pol').value;
    firstPage.drawText(pol, {
      x: 300,
      y: 565,
      font: robotoFont,
      size: 10,
      color: rgb(0, 0, 0),
    });

    const imeRoditelja = this.personalInfoForm.get('imeRoditelja').value;
    firstPage.drawText(imeRoditelja, {
      x: 300,
      y: 544,
      font: robotoFont,
      size: 10,
      color: rgb(0, 0, 0),
    });

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
    firstPage.drawText(brojPasosa, {
      x: 300,
      y: 495,
      font: robotoFont,
      size: 10,
      color: rgb(0, 0, 0),
    });

    const adresaPrebivalista = this.personalInfoForm.get('adresaPrebivalista').value;
    firstPage.drawText(adresaPrebivalista, {
      x: 300,
      y: 475,
      font: robotoFont,
      size: 10,
      color: rgb(0, 0, 0),
    });

    const adresaPrebivalistaInternoRaseljeni = this.personalInfoForm.get('adresaPrebivalistaInternoRaseljeni').value;
    if (adresaPrebivalistaInternoRaseljeni) {
      firstPage.drawText(adresaPrebivalistaInternoRaseljeni, {
        x: 300,
        y: 455,
        font: robotoFont,
        size: 10,
        color: rgb(0, 0, 0),
      });
    }

    const stranaAdresaPrebivalista = this.foreignVotingInfoForm.get('adresaPrebivalista').value;
    firstPage.drawText(stranaAdresaPrebivalista, {
      x: 300,
      y: 405,
      font: robotoFont,
      size: 10,
      color: rgb(0, 0, 0),
    });

    const izbornoMesto = this.foreignVotingInfoForm.get('izbornoMesto').value;
    const zeljenoIzbornoMesto = this.foreignVotingInfoForm.get('zeljenoIzbornoMesto').value;
    firstPage.drawText(zeljenoIzbornoMesto ?? izbornoMesto, {
      x: 300,
      y: 350,
      font: robotoFont,
      size: 10,
      color: rgb(0, 0, 0),
    });

    const trenutnaLokacija = this.foreignVotingInfoForm.get('trenutnaLokacija').value;
    firstPage.drawText(trenutnaLokacija, {
      x: 140,
      y: 260,
      font: robotoFont,
      size: 10,
      color: rgb(0, 0, 0),
    });

    const datum = this.getDateString(new Date());
    firstPage.drawText(datum, {
      x: 220,
      y: 260,
      font: robotoFont,
      size: 10,
      color: rgb(0, 0, 0),
    });

    const signatureImage = await pdfDoc.embedPng(this.signature);
    const signatureDims = signatureImage.scale(0.25);

    firstPage.drawImage(signatureImage, {
      x: 450,
      y: 200,
      width: signatureDims.width,
      height: signatureDims.height,
    });

    const telefon = this.personalInfoForm.get('telefon').value;
    const email = this.personalInfoForm.get('email').value;

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

  sendEmail() {
    const izbornoMesto: PollingStation = this.foreignVotingInfoForm.get('izbornoMesto')!.value;
    const to = izbornoMesto.email;
    const subject = 'Registracija za glasanje iz inostranstva';
    const body = 'Poštovani, \nPrilažem moje podatke za registraciju za glasanje iz inostranstva. \nSa poštovanjem';
    window.open(`mailto:${to}?subject=${subject}&body=${body}`, "_blank");
  }

  private getDateString(date: Date): string {
    const [{value: mo}, , {value: da}, , {value: ye}] = this.dtf.formatToParts(date);
    return `${da}.${mo}.${ye}.`;
  }

  private filter(filter: string): PollingStation[] {
    const filterString = filter.toLowerCase();
    return this.locations.filter((location) =>
      location.label.toLowerCase().includes(filterString)
      || location.labelCyr.toLowerCase().includes(filterString)
    );
  }
}
