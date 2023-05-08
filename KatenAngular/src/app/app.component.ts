import { Component, OnInit } from '@angular/core';
import { BerryService } from './services/berry.service';
import { IBerry } from './models/berry';
import { Observable } from 'rxjs';
import {berry as data} from './data/berry'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'KatenAngular';
  berry:IBerry[]=[]
  constructor(
    public berryService: BerryService) {
  }

  ngOnInit(): void 
  {
    this.berryService.getAll().subscribe(berries=>{
      console.log(berries)
      this.berry = berries
      // this.berry = berries
    })

  }
}
