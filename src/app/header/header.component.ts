import { Component, OnInit, Input } from '@angular/core';
import { Data } from '@angular/router';
import { waldenc } from '../type';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() dataPass!: waldenc[];
  
  constructor() { }

  ngOnInit(): void {   
    
  }
  
  
}
