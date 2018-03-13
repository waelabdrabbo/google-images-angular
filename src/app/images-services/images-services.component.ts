import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { query } from '@angular/core/src/animation/dsl';


@Component({
  selector: 'app-images-services',
  templateUrl: './images-services.component.html',
  styleUrls: ['./images-services.component.scss']
})
export class ImagesServicesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
@Injectable()
export class ImagesService {
  private query: string;
  private API_KEY: string = environment.GCS_API_KEY;
  private API_URL: string = environment.GCS_API_URL;
  private GCS_ID: string = environment.GCS_ID;
  private URL: string = this.API_URL + this.API_KEY + '&cx=' + this.GCS_ID + '&searchType=image' + '&imgDominantColor=black' + '&q=';

  constructor(private _http: Http) { }
  getImage(query) {
    return this._http.get(this.URL + query).map(res => res.json());
  }
}
