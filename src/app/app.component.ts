import { Component, OnInit } from '@angular/core';
import { covidS } from './type';
import { waldenc } from './type';
import { DataPassService } from './data-pass.service';
import covidData from '../assets/data/covidsummary.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'waldencA4';
  waldenData!: waldenc[];
  cData: covidS[] = covidData;
  constructor(private myService: DataPassService) { }

  ngOnInit(): void {
    this.loadDataPass();
  }
  loadDataPass(): void{
    this.waldenData = this.myService.loadWaldencData();
    console.log(this.waldenData);
  }
}
