import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero'

@Component({
  //metadata properties
  selector: 'app-heroes', 
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  hero: Hero = {
    id: 1, 
    name: 'Irina'
  };
}
