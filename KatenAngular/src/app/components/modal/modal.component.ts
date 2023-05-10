import { Component, Inject, Input, OnInit } from '@angular/core';
import { BerriesModel } from 'src/app/models/berriesModel';
import { BerryService } from 'src/app/services/berry.service';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})

export class ModalComponent {

  @Input() berryModel: BerriesModel;

  constructor(public modalService: ModalService) { }

  
  // ngOnInit(): void {
  //   this.berryService.getNext(this.url).subscribe(berries=>
  //     {
  //       this.berryModel = berries
  //       console.log(this.url)
  //     })
  // }

}