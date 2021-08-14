import { Component, OnInit, Type } from '@angular/core';
import { Data } from '@angular/router';
import { waldenc } from '../type';
import { DataPassService } from '../data-pass.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  dataPass!: waldenc[];
  
  constructor(private myService: DataPassService) { }

  ngOnInit(): void {
    this.loadDataPass();
    
    
  }
  loadDataPass(): void{
    this.dataPass = this.myService.loadWaldencData();
    console.log(this.dataPass);
  }
  
}
