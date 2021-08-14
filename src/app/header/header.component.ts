import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { DataPassService } from '../data-pass.service';
import { waldenc } from '../type';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  

  constructor(private myService: DataPassService) { }

  ngOnInit(): void {
  }

}
