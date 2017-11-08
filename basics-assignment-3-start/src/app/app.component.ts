import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  toggleState = false;
  log = [];
  updateToggleState(){
    if (this.toggleState){
      this.log.push(Date());
    }

    this.toggleState = !this.toggleState
  }

  getBG(index){
    return this.isFifthOrGreater(index) ? 'blue': '';
  }

  isFifthOrGreater( index ){
    return index >= 4? true: false;
  }
}
