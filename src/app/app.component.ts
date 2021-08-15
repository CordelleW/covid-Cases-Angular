import { Component, OnInit } from '@angular/core';
import { covidS } from './type';
import { waldenc } from './type';
import { DataPassService } from './data-pass.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'waldencA4';
  waldenData!: waldenc[];
  cData!: covidS[];
  constructor(private myService: DataPassService) { }

  ngOnInit(): void {
    this.loadDataPass();
  }
  loadDataPass(): void{
    this.waldenData = this.myService.loadWaldencData();
    this.cData = this.myService.loadCovidData();    
  }
}
