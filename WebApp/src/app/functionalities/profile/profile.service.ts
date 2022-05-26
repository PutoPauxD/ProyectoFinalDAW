import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {


  constructor() { }

  private _idProfileSelected: number;

  public getidProfileSelected(): number {
    return this._idProfileSelected;
  }

  public setidProfileSelected(value: number) {
    this._idProfileSelected = value;
  }



}
