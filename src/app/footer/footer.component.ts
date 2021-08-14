import { Component, OnInit } from '@angular/core';
import { DataPassService } from '../data-pass.service';
import { waldenc } from '../type';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
