import {ChangeDetectionStrategy, Component, ViewChild} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

import {PDFDocument, rgb} from 'pdf-lib';
import fontkit from '@pdf-lib/fontkit'

import * as download from 'downloadjs';
import {SignaturePad} from 'angular2-signaturepad';


@Component({
  selector: 'glasanje-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormComponent {

  @ViewChild(SignaturePad) signaturePad: SignaturePad;

  readonly form = this.fb.group({
    'ime': this.fb.control('', [Validators.required]),
    'datumRodjenja': this.fb.control('', [Validators.required]),
    'pol': this.fb.control('', [Validators.required]),
    'imeRoditelja': this.fb.control('', [Validators.required]),
    'izbornoMesto': this.fb.control('', [Validators.required]),
    'jmbg': this.fb.control('', [
      Validators.required,
      Validators.pattern("^[0-9]*$"),
      Validators.minLength(13),
      Validators.maxLength(13),
    ]),
    'brojPasosa': this.fb.control('', [
      Validators.required,
      Validators.pattern("^[0-9]*$"),
    ]),
    'potpis': this.fb.control(''),
  });

  readonly signaturePadOptions = {
    'canvasHeight': 300,
    'canvasWidth': 500,
  };

  signatureSet = false;
  signature = '';

  constructor(private readonly fb: FormBuilder) {}

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

    const ime = this.form.get('ime').value;
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

    const datumRodjenja = this.form.get('datumRodjenja').value;
    const dtf = new Intl.DateTimeFormat('en', {year: 'numeric', month: 'numeric', day: '2-digit'});
    const [{value: mo}, , {value: da}, , {value: ye}] = dtf.formatToParts(datumRodjenja);
    const datumRodjenjaFormat = `${da}.${mo}.${ye}.`;
    firstPage.drawText(datumRodjenjaFormat, {
      x: 300,
      y: 590,
      font: robotoFont,
      size: 10,
      color: rgb(0, 0, 0),
    });

    const pol = this.form.get('pol').value;
    firstPage.drawText(pol, {
      x: 300,
      y: 565,
      font: robotoFont,
      size: 10,
      color: rgb(0, 0, 0),
    });

    const imeRoditelja = this.form.get('imeRoditelja').value;
    firstPage.drawText(imeRoditelja, {
      x: 300,
      y: 544,
      font: robotoFont,
      size: 10,
      color: rgb(0, 0, 0),
    });

    const jmbg = this.form.get('jmbg').value;
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

    const brojPasosa = this.form.get('brojPasosa').value;
    firstPage.drawText(brojPasosa, {
      x: 300,
      y: 495,
      font: robotoFont,
      size: 10,
      color: rgb(0, 0, 0),
    });


    const izbornoMesto = this.form.get('izbornoMesto').value;
    firstPage.drawText(izbornoMesto, {
      x: 500,
      y: 350,
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

    const pdfBytes = await pdfDoc.save();
    download(pdfBytes, "Zahtev za glasanje 2020.pdf", "application/pdf");
  }
}
