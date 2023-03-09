import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { city, country, state } from 'src/app/models/comman/Country';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class AreaService {

  baseApiUrl:string = environment.baseApiUrl;
  constructor(private http:HttpClient) { }

  GetAllCountries(){
    return this.http.get<country[]>(this.baseApiUrl + '/Area/GetAllCountries');
  }

  GetAllState(country_code:string){
    return this.http.get<state[]>(this.baseApiUrl + '/Area/GetAllState/' + country_code);
  }

  GetAllCities(state_code:string) {
    return this.http.get<city[]>(this.baseApiUrl + '/Area/GetAllCities/' + state_code);
  }
}
