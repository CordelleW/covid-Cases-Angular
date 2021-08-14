import { Injectable } from '@angular/core';
import { waldenc } from './type';
import { WALDENCDATA } from 'src/assets/data/waldencData';

@Injectable({
  providedIn: 'root'
})
export class DataPassService {

  
  constructor() { }
  loadWaldencData(): waldenc[] {
    return WALDENCDATA;}
}


