import { Component, EventEmitter, Input, OnInit,Output } from '@angular/core';
import { BerriesModel, Result } from 'src/app/models/berriesModel';
import { BerryService } from 'src/app/services/berry.service';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-berry',
  templateUrl: './berry.component.html',
  styleUrls: ['./berry.component.css']
})
export class BerryComponent{
  @Input() berryCheck: Result[]
  berryModel:BerriesModel
  chosenBerry:string

  constructor
  (public modalService:ModalService,
    private berryService: BerryService)
    {}
    //TODO: Возможно ли сделать через event?
  getBerry(number:number): void 
  {
    this.berryService.getNext(this.berryCheck[number].url).subscribe(berries => {
      this.berryModel = berries})
  }
  
  onChosen(berry:BerriesModel)
  {
    this.chosenBerry = berry.name
  }

}
