import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SubgrupoInterface } from '../model/subgrupo';
import { environment } from 'src/environments/environment';
import { Subgrupo } from '../subgrupo';


@Injectable({
  providedIn: 'root'
})
export class SubgrupoService {

  private _api = environment.api;

  constructor(private httpClient: HttpClient) { }

  getSubgroups() {
    return this.httpClient.get<SubgrupoInterface[]>(this._api + '/subgroup');
  }

  deleteSubgroup(idSubgroup: Number) {
    return this.httpClient.delete<SubgrupoInterface>(this._api + '/subgroup/' + idSubgroup);
  }

  postSubgroup(subgroup: Subgrupo) {
    return this.httpClient.post(this._api + '/subgroup', subgroup);
  }

  editSubgroup(idSubgroup: Number, subgroup: Subgrupo) {
    return this.httpClient.put(this._api + '/subgroup/' + idSubgroup, subgroup);
  }
}