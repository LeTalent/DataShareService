import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-parent2',
  templateUrl: './parent2.component.html',
  styleUrls: ['./parent2.component.css']
})
export class Parent2Component implements OnInit {
text = '';
  constructor(private dataServ: DataService) { }

  ngOnInit() {
    this.dataServ.share.subscribe( x => this.text = x );
  }

}
