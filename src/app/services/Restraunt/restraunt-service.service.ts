import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment'
import { Observable } from 'rxjs';
import { RestrauntMaster } from 'src/app/models/RestrauntLogin/restraunt.model';
import { UpdateStatus } from 'src/app/models/comman/comman.model';
@Injectable({
  providedIn: 'root'
})
export class RestrauntServiceService {

  baseurl = environment.baseApiUrl
  constructor(private http:HttpClient) {
    console.log('service started')
  }

  GetAllRestrauntMaster() : Observable<any> {
    return this.http.get<Response>(this.baseurl + '/RestrauntMaster/GetAllRestrauntMaster');
  }
  GetRestrauntMasterById() : Observable<any> {
    return this.http.get<Response>(this.baseurl + '/RestrauntMaster/GetRestrauntMasterById');
  }
  SaveRestrauntMaster(Restraunt: RestrauntMaster) : Observable<any> {
    return this.http.post<Response>(this.baseurl + '/RestrauntMaster/SaveRestrauntMaster',Restraunt);
  }
  UpdateRestrauntMaster(Restraunt: RestrauntMaster) : Observable<any> {
    return this.http.post<Response>(this.baseurl + '/RestrauntMaster/UpdateRestrauntMaster',Restraunt);
  }
  SaveStatus(status: UpdateStatus) : Observable<any> {
    return this.http.post<Response>(this.baseurl + '/RestrauntMaster/SaveStatus',status);
  }
}
