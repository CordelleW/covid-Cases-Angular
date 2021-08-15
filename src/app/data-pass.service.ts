import { Injectable } from '@angular/core';
import { waldenc } from './type';
import { covidS } from './type';
import { WALDENCDATA } from 'src/assets/data/waldencData';
import covidData from '../assets/data/covidsummary.json'

@Injectable({
  providedIn: 'root'
})
export class DataPassService {

  
  constructor() { }
  loadWaldencData(): waldenc[] {
    return WALDENCDATA;
  }
  loadCovidData(): covidS[] {
    return covidData;
  }
    
}


