import { Component, OnInit } from '@angular/core';
import { DataPassService } from '../data-pass.service';
import { waldenc } from '../type';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
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
