import { Component, OnInit } from '@angular/core';
import { BerryService } from './services/berry.service';
import { BerryCheck } from './models/berriesModel';
import { ModalService } from './services/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'KatenAngular';
  berry:BerryCheck
  constructor(
    private berryService: BerryService,
    public modalService:ModalService) {
  }

  ngOnInit(): void 
  {
    this.berryService.getAll().subscribe(berries=>{
      this.berry = berries
    })
  }
}
