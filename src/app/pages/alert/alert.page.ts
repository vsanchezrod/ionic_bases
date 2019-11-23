import { Component, OnInit } from '@angular/core';

// Importamos el AlertController y lo inyectamos en el constructor
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  titulo: string;

  constructor(private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  // Método asíncrono
  // Alerta con dos botones de OK y CANCEL
  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',

      // Varios botones para manejar la alerta
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel', // Por este rol si tocamos fuera del popup de la alerta se cierra la alerta
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Cancelar');
          }
        },
        {
          text: 'Ok',
          handler: (blah) => {
            console.log('Botón OK');
          }
        }
      ]
    });

    await alert.present();
  }

  // Método asíncrono
  // Alerta con un prompt, un input en el que recogemos el nombre y lo guardamos en una variable
  async presentAlertPrompt() {
    const alert = await this.alertCtrl.create({
      header: 'Input Prompt!',
      subHeader: 'Introduce tu nombre',
      inputs: [
        {
          name: 'txtNombre',
          type: 'text',
          placeholder: 'Introduce tu nombre'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancelar');
          }
        }, {
          text: 'Ok',
          handler: (data) => {
            // Entra un objeto que contiene como propiedad el nombre del input, por lo que podemos acceder a su valor
            console.log('Nombre registrado:', data);
            this.titulo = data.txtNombre;
          }
        }
      ]
    });

    await alert.present();
  }
}
