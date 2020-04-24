import { Component, OnInit } from '@angular/core';
import {Storage} from '@ionic/storage';


@Component({
  selector: 'app-storage',
  templateUrl: './storage.page.html',
  styleUrls: ['./storage.page.scss'],
})
export class StoragePage implements OnInit {

  constructor(private storage:Storage) { }
  myStatus:string="";
  ngOnInit() {

    
  }
  ionViewWillLeave()
  {
    console.log(this.myStatus);
    this.storage.set("country", this.myStatus);
  }

}
