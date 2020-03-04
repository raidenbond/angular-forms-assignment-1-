import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
project_title = 'calculate hyponoses pythoras theorem';
input1 = null;
input2 = null;
canDisplay = false;
hypo =0;


handleSubmit(){

  console.log("calculate clicked");
  const a = parseFloat(this.input1);
  const b = parseFloat(this.input2);

  if( !isNaN(a) && !isNaN(b)){
    this.hypo = Math.sqrt((Math.pow(a,2) + Math.pow(b,2)));
    this.canDisplay = true;
  }

}


onReset(){
  console.log("reset clicked");
  this.canDisplay = false;
  this.input1 = null;
  this.input2 = null;
}

}


  
