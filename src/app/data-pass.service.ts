import { Injectable } from '@angular/core';
import { waldenc } from './type';
import { LOGINS } from 'src/assets/data/waldencData';

@Injectable({
  providedIn: 'root'
})
export class DataPassService {

  constructor() { }
  loadMyData(): waldenc[] {return LOGINS;}
}


