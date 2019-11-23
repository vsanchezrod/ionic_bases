import { Component, OnInit } from '@angular/core';

// Importamos Action Sheet Controller y lo inyectamos en el contructor
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage implements OnInit {


  constructor(private actionSheetCtrl: ActionSheetController) { }

  ngOnInit() {}

  // Método async que devuelve una promesa
  async presentActionSheet() {

    // El await le dice que espere a que el actionSheetController cree todo el componente y se almacena en esa constante
    const actionSheet = await this.actionSheetCtrl.create({
      // Header
      header: 'Albums',
      /* Se pueden añadir propiedades a este objecto para quitar animaciones y quitar que haciendo click fuera del menu
      se cierre el actionsheet (backdropDismiss)*/
      backdropDismiss: false,

      /* Con la propiedad cssClass se puede añadir alguna propiedad CSS a un Action, por ejemplo añadírselo al botón
      de delete (En IOS coge el role destructive y lo pone en rojo de forma automática, pero en Android es necesario
      añadir una nueva propiedad*/
      // Array de Botones con texto, rol e iconos
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        cssClass: 'rojo', // Al ser un estilo para un componente de Ionic la clase se debe crear en el global.scss

        // Función que se dispara cuando alguien hace click en ese botón
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Share',
        icon: 'share',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Play (open modal)',
        icon: 'arrow-dropright-circle',
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'Favorite',
        icon: 'heart',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });

    // Esta opción dice que muestre todo el actionSheet
    await actionSheet.present();
  }
}
