import { Component, Input } from '@angular/core';
import { faPen, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  winMessage = '';
  isCross = false;
  item : string [] = new Array(9).fill('empty');
  title = 'TicTacToe';

  checkIsWinner = ()=>{
    if(this.item[0]!=='empty'&&
    this.item[0]===this.item[1]&&
    this.item[0]===this.item[2]
    ){
      this.winMessage = `${this.item[0]} won`
    }
  
    else if(this.item[3]!=='empty'&&
    this.item[3]===this.item[4]&&
    this.item[3]===this.item[5]
    ){
      this.winMessage = `${this.item[3]} won`
    }
    
    else if(this.item[6]!=='empty'&&
    this.item[6]===this.item[7]&&
    this.item[6]===this.item[8]
    ){
      this.winMessage = `${this.item[6]} won`
    }
    else if(this.item[0]!=='empty'&&
    this.item[0]===this.item[3]&&
    this.item[0]===this.item[6]
    ){
      this.winMessage = `${this.item[0]} won`
    }
    else if(this.item[1]!=='empty'&&
    this.item[1]===this.item[4]&&
    this.item[1]===this.item[7]
    ){
      this.winMessage = `${this.item[1]} won`
    }
    else if(this.item[2]!=='empty'&&
    this.item[2]===this.item[5]&&
    this.item[2]===this.item[8]
    ){
      this.winMessage = `${this.item[2]} won`
    } 
    else if(this.item[0]!=='empty'&&
    this.item[0]===this.item[4]&&
    this.item[0]===this.item[8]
    ){
      this.winMessage = `${this.item[0]} won`
    }
    else if(this.item[2]!=='empty'&&
    this.item[2]===this.item[4]&&
    this.item[2]===this.item[6]
    ){
      this.winMessage = `${this.item[2]} won`
    }
    
  }
  reloadGame = ()=>{
    this.winMessage = '';
    this.isCross = false; 
    this.item = new Array(9).fill('empty');
  }
  onClick(itemNumber:number){
    if(this.winMessage){
      console.log(this.winMessage)
    }
    if(this.item[itemNumber]==='empty'){
      this.item[itemNumber] = this.isCross?'cross':'circle'
      this.isCross= !this.isCross;
    }else{
       console.log('Already filled')
    }
    this.checkIsWinner();
  }

}
