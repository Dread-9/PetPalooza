import { Component, Optional } from '@angular/core';
import { AlertController, IonRouterOutlet, Platform } from '@ionic/angular';
import { App } from '@capacitor/app';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],

})
export class AppComponent {
  private lastTimeBackPress = 0;
  private timePeriodToExit = 2000;

  constructor(
    private platform: Platform,
    private alertCtrl: AlertController,
    @Optional() private routerOutlet?: IonRouterOutlet
  ) {
    this.platform.backButton.subscribeWithPriority(-1, () => {
      if (!this.routerOutlet?.canGoBack()) {
        if (new Date().getTime() - this.lastTimeBackPress < this.timePeriodToExit) {
          this.alertExit();
        } else {
          this.lastTimeBackPress = new Date().getTime();
        }
      }
    });
  }

  async alertExit() {
    console.log('alert');
    const alert = await this.alertCtrl.create({
      header: 'Salir de la aplicación',
      subHeader: 'Confirmar',
      message: '¿Estás seguro que quieres salir de la aplicación?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'alert-button-no',
        },
        {
          text: 'Si',
          role: 'confirm',
          cssClass: 'alert-button-yes',
          handler: () => { App.exitApp(); }
        }
      ],
      mode: 'ios' // Establecer el modo iOS para el alert
    });
    await alert.present();
  }
}