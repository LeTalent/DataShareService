import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-parent3',
  templateUrl: './parent3.component.html',
  styleUrls: ['./parent3.component.css']
})
export class Parent3Component implements OnInit {
  text = '';

  constructor(private dataServ: DataService) { }

  ngOnInit() {
  }
  updateText(text) {
    this.dataServ.updateData(text);
  }

}
