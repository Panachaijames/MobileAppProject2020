import { Component, OnInit} from '@angular/core';
import {Storage} from '@ionic/storage';
import { LoadingController } from '@ionic/angular';
import {CovidService} from '../Services/covid.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
myCountry:string;
covidWorld:any=[];

  constructor(private storage:Storage,public loadingController: LoadingController,
     private covidService:CovidService) {}

  async presentLoadingWithOptions() {
    const loading = await this.loadingController.create({
      duration: 5000,
      message: 'Click the backdrop to dismiss early...',
      translucent: true,
      cssClass: 'custom-class custom-loading',
      backdropDismiss: true
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed with role:', role);
  }
  ionViewWillEnter()
  {
    this.storage.get("country").then(
        (data)=>{
            this.myCountry = data;
        }
      ).catch(
        (error)=>{
          console.log(error);
        }
      );
  }
  ngOnInit()
  {
    this.covidService.GetCovid19Data().subscribe(
      (data)=>{
        this.covidWorld = data.Global;
      }
    )
  }
  
}
