import { Component, OnInit } from '@angular/core';
import {CovidService} from '../Services/covid.service';
@Component({
  selector: 'app-page2',
  templateUrl: './page2.page.html',
  styleUrls: ['./page2.page.scss'],
})
export class Page2Page implements OnInit {
CovidData:any=[];
CovidSearchData:any=[];
searchCountry:string="";
  constructor(private covidService:CovidService) { 

  }

  performSearch()
  {
    console.log(this.searchCountry);  
    this.covidService.GetSearchData(this.searchCountry).subscribe(
      (data)=>{
        this.CovidSearchData = data;
      }
    );
  }
  ngOnInit() {
    this.covidService.GetCovid19Data().subscribe(
      (data)=>{
        this.CovidData = data.Countries;
      }
    )
  }

}
