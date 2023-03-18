import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { city, country, state } from 'src/app/models/comman/Country';
import { environment } from 'src/environment/environment';
import { Observable, observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AreaService {
  baseApiUrl: string = environment.baseApiUrl;
  constructor(private http: HttpClient) {}

  GetAllCountries(): Observable<country[]> {
    return this.http.get<country[]>(this.baseApiUrl + '/Area/GetAllCountries');
  }

  GetAllState(country_code: string): Observable<state[]> {
    return this.http.get<state[]>(
      this.baseApiUrl + '/Area/GetAllState/' + country_code
    );
  }

  GetAllCities(state_code: string): Observable<city[]> {
    return this.http.get<city[]>(
      this.baseApiUrl + '/Area/GetAllCities/' + state_code
    );
  }

  GetAllCitiesByCountryCode(country_code: string): Observable<city[]> {
    return this.http.get<city[]>(
      this.baseApiUrl + '/Area/GetAllCitiesByCountryCode/' + country_code
    );
  }
  GetAllAvailableCity(country_code: string): Observable<city[]> {
    return this.http.get<city[]>(
      this.baseApiUrl + '/Area/GetAllAvailableCity/' + country_code
    );
  }
}
