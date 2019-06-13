import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from "@angular/forms";
import { DocumentFieldsService } from './document-fields.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public form: FormGroup;
  unsubcribe: any;
  //public fields: any[];

   dynamicsFields2 = [
     {
      type: 'datetext',
      name: 'date',
      label: 'Date',
      value: '',
      required: true,
      hasPattern: true,
      // pattern: '^(((((0[1-9])|(1\d)|(2[0-8]))\/((0[1-9])|(1[0-2])))|((31\/((0[13578])|(1[02])))|((29|30)\/((0[1,3-9])|(1[0-2])))))\/((20[0-9][0-9])|(19[0-9][0-9])))|((29\/02\/(19|20)(([02468][048])|([13579][26]))))$' // dd/MM/yyyy
      pattern: '^(((((0[1-9])|(1[0-2]))\/((0[1-9])|(1\d)|(2[0-8])))|((((0[13578])|(1[02]))\/31)|(((0[1,3-9])|(1[0-2]))\/(29|30))))\/((20[0-9][0-9])|(19[0-9][0-9])))|((29\/02\/(19|20)(([02468][048])|([13579][26]))))$'  // MM/dd/yyyy
    },
     {
      type: 'datetext',
      name: 'confirmDate',
      label: 'Confirm Date',
      value: '',
      required: true,
      recapture: true,
      validateField: 'date'
     },
    {
      type: 'text',
      name: 'firstName',
      label: 'First Name',
      value: '',
      required: true
    },
    {
      type: 'text',
      name: 'lastName',
      label: 'Last Name',
      value: '',
      required: false
    },
    {
      type: 'text',
      name: 'email',
      label: 'Email',
      required: true,
      hasPattern: true,
      pattern: '^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$',
      value: ''
    },

    {
      type: 'file',
      name: 'picture',
      label: 'Picture',
      required: true,
      onUpload: this.onUpload.bind(this)
    },
    {
      type: 'dropdown',
      name: 'country',
      label: 'Country',
      value: 'in',
      required: true,
      options: [
        { key: 'in', label: 'India' },
        { key: 'us', label: 'USA' }
      ]
    },
    {
      type: 'radio',
      name: 'country',
      label: 'Country',
      value: 'in',
      required: true,
      options: [
        { key: 'm', label: 'Male' },
        { key: 'f', label: 'Female' }
      ]
    },
    {
      type: 'checkbox',
      name: 'hobby',
      label: 'Hobby',
      required: true,
      options: [
        { key: 'f', label: 'Fishing' },
        { key: 'c', label: 'Cooking' }
      ]
    }
  ];

  dynamicsFields = [
    {
        "idKw": 320,
        "idTemplate": 1188,
        "tipoDato": "Fecha corta",
        "type": "datetext",
        "name": "xFechaExpedicion",
        "label": "xFechaExpedicion",
        "value": "",
        "required": true,
        "idDiccionario": 0,
        "doblecaptura": false,
        "recapture": false,
        "validateField": "",
        "options": null,
        "longitudMin": 1,
        "longitudMax": 10,
        "formatoFecha": "MM/dd/yyyy",
        "regExp": null,
        "guardarDefault": null,
        "valorDefault": null
    },
    {
        "idKw": 321,
        "idTemplate": 1188,
        "tipoDato": "Alfanumerico",
        "type": "dropdown",
        "name": "xTipoDocumentoIdentificacion",
        "label": "xTipoDocumentoIdentificacion",
        "value": "",
        "required": true,
        "idDiccionario": 57,
        "doblecaptura": true,
        "recapture": false,
        "validateField": "",
        "options": [
            {
                "key": "Carne Diplomatico",
                "label": "Diplomatico"
            },
            {
                "key": "Cedula de Ciudadania",
                "label": "Cedula de Ciudadania"
            },
            {
                "key": "Cedula de Extranjeria",
                "label": "Cedula de Extranjeria"
            },
            {
                "key": "NIT",
                "label": "NIT"
            },
            {
                "key": "Tarjeta de Identidad",
                "label": "Tarjeta de Identidad"
            },
            {
                "key": "Pasaporte",
                "label": "Pasaporte"
            },
            {
                "key": "ID extranjero PN no residente en Colombia",
                "label": "ID extranjero PN no residente en Colombia"
            },
            {
                "key": "Fideicomiso",
                "label": "Fideicomiso"
            },
            {
                "key": "Registro Civil",
                "label": "Registro Civil"
            },
            {
                "key": "ID extranjero PJ no residente en Colombia",
                "label": "ID extranjero PJ no residente en Colombia"
            }
        ],
        "longitudMin": 1,
        "longitudMax": 255,
        "formatoFecha": null,
        "regExp": null,
        "guardarDefault": null,
        "valorDefault": null
    },
    {
        "idKw": 321,
        "idTemplate": 1188,
        "tipoDato": "Alfanumerico",
        "type": "dropdown",
        "name": "xTipoDocumentoIdentificacionrecaptura",
        "label": "xTipoDocumentoIdentificacionrecaptura",
        "value": "",
        "required": true,
        "idDiccionario": 57,
        "doblecaptura": true,
        "recapture": true,
        "validateField": "xTipoDocumentoIdentificacion",
        "options": [
            {
                "key": "Carne Diplomatico",
                "label": "Diplomatico"
            },
            {
                "key": "Cedula de Ciudadania",
                "label": "Cedula de Ciudadania"
            },
            {
                "key": "Cedula de Extranjeria",
                "label": "Cedula de Extranjeria"
            },
            {
                "key": "NIT",
                "label": "NIT"
            },
            {
                "key": "Tarjeta de Identidad",
                "label": "Tarjeta de Identidad"
            },
            {
                "key": "Pasaporte",
                "label": "Pasaporte"
            },
            {
                "key": "ID extranjero PN no residente en Colombia",
                "label": "ID extranjero PN no residente en Colombia"
            },
            {
                "key": "Fideicomiso",
                "label": "Fideicomiso"
            },
            {
                "key": "Registro Civil",
                "label": "Registro Civil"
            },
            {
                "key": "ID extranjero PJ no residente en Colombia",
                "label": "ID extranjero PJ no residente en Colombia"
            }
        ],
        "longitudMin": 1,
        "longitudMax": 255,
        "formatoFecha": null,
        "regExp": null,
        "guardarDefault": null,
        "valorDefault": null
    },
    {
        "idKw": 322,
        "idTemplate": 1188,
        "tipoDato": "Alfanumerico",
        "type": "text",
        "name": "xNumeroIdentificacion",
        "label": "xNumeroIdentificacion",
        "value": "",
        "required": true,
        "idDiccionario": 0,
        "doblecaptura": true,
        "recapture": false,
        "validateField": "",
        "options": null,
        "longitudMin": 1,
        "longitudMax": 255,
        "formatoFecha": null,
        "regExp": null,
        "guardarDefault": null,
        "valorDefault": null
    },
    {
        "idKw": 322,
        "idTemplate": 1188,
        "tipoDato": "Alfanumerico",
        "type": "text",
        "name": "xNumeroIdentificacionrecaptura",
        "label": "xNumeroIdentificacionrecaptura",
        "value": "",
        "required": true,
        "idDiccionario": 0,
        "doblecaptura": true,
        "recapture": true,
        "validateField": "xNumeroIdentificacion",
        "options": null,
        "longitudMin": 1,
        "longitudMax": 255,
        "formatoFecha": null,
        "regExp": null,
        "guardarDefault": null,
        "valorDefault": null
    }
];
   
public fields: any = this.dynamicsFields2;

  constructor(private rest: DocumentFieldsService) {
    
    // this.rest.getDocuments().subscribe((data: []) => {  
    //   this.fields = data;
    //   console.log(this.fields);
    // });

    this.form = new FormGroup({
      fields: new FormControl(JSON.stringify(this.fields))
    })
    this.unsubcribe = this.form.valueChanges.subscribe((update) => {    
      this.fields = JSON.parse(update.fields);
    });

  }

  ngOnInit() {
  }

  onUpload(e) {
    console.log(e);
  }

  getFields() {
    console.log("getFields");
    return this.fields;
  }

  ngDistroy() {
    this.unsubcribe();
  }
  
}
