import { Component, Output, Input, EventEmitter } from '@angular/core';
import { BerriesModel } from 'src/app/models/berriesModel';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})

export class ModalComponent {

  @Input() berryModel: BerriesModel;
  @Output() onChosen = new EventEmitter<any>();

  constructor(public modalService: ModalService) { } 
  
  chosen(berry:BerriesModel)
  {
    this.onChosen.emit(berry)
  }
}