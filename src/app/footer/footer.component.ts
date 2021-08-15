import { Component, OnInit,Input } from '@angular/core';
import { waldenc } from '../type';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  @Input() dataPass!: waldenc[];
  
  constructor() { }

  ngOnInit(): void {
    
  }
  
}
