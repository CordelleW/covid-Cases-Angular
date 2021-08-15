import { Component, OnInit, Input } from '@angular/core';
import { covidS } from '../type';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  @Input() dataList!: covidS[];
  constructor() { }

  ngOnInit(): void {
  }

}
