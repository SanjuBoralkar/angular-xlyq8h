import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup} from '@angular/forms';
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
registerfields = new FormGroup({
fname : new FormControl(''),
  lname : new FormControl(''),
  email : new FormControl('')
});
  Submit(){
    console.log("inside submit");
    console.log(this.registerfields.controls["fname"].value);
    console.log(this.registerfields.controls["lname"].value);
    console.log(this.registerfields.controls["email"].value);
  }

  constructor() { }

  ngOnInit() {
  }

}