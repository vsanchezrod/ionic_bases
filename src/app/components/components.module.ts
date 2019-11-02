import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Componentes
import { HeaderComponent } from './header/header.component';

// Importar el modulo de componentes de Ionic
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class ComponentsModule { }
