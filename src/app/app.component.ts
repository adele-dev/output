import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'output';
  onomatopoeias: string[]=[
    "houlala",
    "waouh",
    "hiha",
    "ding",
    "psst"
  ];

  onReceiveNewOnomatopia(inputValue:string){
    console.log(inputValue);
    this.onomatopoeias.push(inputValue);
  }

}
