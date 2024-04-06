import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ImgModalPage } from '../img-modal/img-modal.page';
import * as infoPerro from '../../assets/data/InfoPerro.json';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  infoPerro: any = (infoPerro as any).default;
  infoPerroChunks: any[][] = [];


  constructor(private router: Router, private modalController: ModalController) {
    for (let i = 0; i < this.infoPerro.length; i += 3) {
      this.infoPerroChunks.push(this.infoPerro.slice(i, i + 3));
    }
  }

  navigateToTargetPage(segment: string, perroId: number) {
    this.router.navigate(['/tabs/tab3', segment, perroId]);
  }


  async openModal(imageUrl: string) {
    const modal = await this.modalController.create({
      component: ImgModalPage,
      componentProps: {
        imageUrl: imageUrl
      }
    });
    return await modal.present();
  }

  swiperOptions = {
    slidesPerView: 3,
    spaceBetween: 10,
    navigation: true
  };


}
