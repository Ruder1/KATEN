import { Component, Input, OnInit } from '@angular/core';
import { BerriesModel, Result } from 'src/app/models/berriesModel';
import { BerryService } from 'src/app/services/berry.service';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-berry',
  templateUrl: './berry.component.html',
  styleUrls: ['./berry.component.css']
})
export class BerryComponent implements OnInit {
  @Input() berryCheck: Result
  berryModel:BerriesModel

  constructor
  (
    public modalService:ModalService,
    private  berryService:BerryService
  ){}

  ngOnInit(): void
   {
    this.berryService.getNext(this.berryCheck.url).subscribe(berries=>
    {
      this.berryModel = berries
      console.log(this.berryModel)
    })
  }
}
