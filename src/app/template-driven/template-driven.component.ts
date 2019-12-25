import { Component, OnInit } from '@angular/core';
 
@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})

export class TemplateDrivenComponent implements OnInit {
  username : String;
  password : String;

  constructor() { 
    this.username = "sanjay";
    this.password = "sanjay";
  }

  ngOnInit() {
  }
  onSubmit(){
    this.username = "vijay";
    this.password = "vijay";
  }

}