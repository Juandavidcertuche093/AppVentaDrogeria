import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { environment } from '../../../environments/environments';
import { ResponseApi } from '../../core/models/response-api';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private urlApi:string = environment.API_URL + "Menu/";

  private http = inject(HttpClient)

  constructor() { }

  lista(idUsuario: number):Observable<ResponseApi>{
    return this.http.get<ResponseApi>(`${this.urlApi}Lista?idUsuario=${idUsuario}`)
  }
}
