import { Component, OnInit } from '@angular/core';
import { covidS } from './type';
import covidData from '../assets/data/covidsummary.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'waldencA4';
  cData: covidS[] = covidData;
  constructor() { }

  ngOnInit(): void {
  }
}
