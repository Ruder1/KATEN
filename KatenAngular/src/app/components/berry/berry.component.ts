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
  @Output() onChanged = new EventEmitter<any>();
  berryModel:BerriesModel

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
}
//Попробовать через $event
//getBerry(number:nubmer)
//{
//   this.berryService.getNext(this.berryCheck[number].url).subscribe(berries => {
//     this.berryModel = berries
// }
