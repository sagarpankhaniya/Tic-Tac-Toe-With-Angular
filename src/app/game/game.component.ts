import { Component, OnInit, Input } from '@angular/core';
import { faPen,faTimes } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-regular-svg-icons';



@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
 
  @Input() iconName: string;
  faPen = faPen;
  faCircle = faCircle;
  faTimes = faTimes;


  constructor() { }

  ngOnInit(): void {
  }
  
}
