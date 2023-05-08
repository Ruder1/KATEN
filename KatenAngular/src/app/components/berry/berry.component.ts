import { Component, Input } from '@angular/core';
import { IBerry } from 'src/app/models/berry';

@Component({
  selector: 'app-berry',
  templateUrl: './berry.component.html',
  styleUrls: ['./berry.component.css']
})
export class BerryComponent {
  @Input() berry: IBerry

  details = false
}
