import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'portfolio';
  a=false;
   
  s=true;
  @ViewChild('v') v:any;
 constructor( ) { }
Cv="./CvRamiJoudi.pdf"
 

ngOnInit(): void {
   
 }

 show(){
   this.s=false;
    
 }
cv(){
  
window.open("https://drive.google.com/file/d/1uEmEZYNUqdaD82eKPBAoOD-pSk0Y-Dno/view?usp=sharing")
}
}
