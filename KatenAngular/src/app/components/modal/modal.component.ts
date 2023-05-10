import { Component,Inject,Input,OnInit } from '@angular/core';
import { BerriesModel } from 'src/app/models/berriesModel';
import { BerryService } from 'src/app/services/berry.service';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})

export class ModalComponent implements OnInit {

  @Input() berryModel:BerriesModel
  

  constructor(public modalService: ModalService) { }

  ngOnInit(): void {
    
  }

}