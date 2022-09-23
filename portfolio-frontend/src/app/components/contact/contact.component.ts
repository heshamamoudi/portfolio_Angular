import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  name:string=""
  phone:string="+966 "
  email:string=""
  message:string=""
  constructor() { }

  ngOnInit(): void {
  }

}
