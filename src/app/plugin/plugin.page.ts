import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions} from '@ionic-native/native-geocoder/ngx';
import { Flashlight } from '@ionic-native/flashlight/ngx';

@Component({
  selector: 'app-plugin',
  templateUrl: './plugin.page.html',
  styleUrls: ['./plugin.page.scss'],
})
export class PluginPage implements OnInit {

  long:number;
lat:number;
searchLatitude:number;
searchLongtitude:number;
searchByName:string="";
countryName:string="";
longtitude:number;
latitude:number;
  constructor(private geolocation: Geolocation,private nativeGeocoder: NativeGeocoder, private flashlight: Flashlight) { }

  lightMethod()
  {
    this.flashlight.toggle();
  }
  locationMethod()
  {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.lat = resp.coords.latitude;
      this.long = resp.coords.longitude;
     }).catch((error) => {
       console.log('Error getting location', error);
     });
  }
  countryMethod()
  {
    console.log(this.searchLatitude,this.searchLongtitude);  
    let options: NativeGeocoderOptions = {
      useLocale: true,
      maxResults: 5
    };
  
    this.nativeGeocoder.reverseGeocode(this.searchLatitude, this.searchLongtitude, options)
      .then((result: NativeGeocoderResult[]) => console.log(JSON.stringify(result[0])))
      .catch((error: any) => console.log(error));

  }
  searchName()
  {
    console.log(this.searchByName);
    let options: NativeGeocoderOptions = {
      useLocale: true,
      maxResults: 5
    };

    this.nativeGeocoder.forwardGeocode(this.searchByName, options)
      .then((result: NativeGeocoderResult[]) => console.log('The coordinates are latitude=' + result[0].latitude + ' and longitude=' + result[0].longitude))
      .catch((error: any) => console.log(error));
  }
  ngOnInit() {
  }

}
