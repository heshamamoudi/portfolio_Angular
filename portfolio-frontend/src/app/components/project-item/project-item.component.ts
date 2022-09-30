import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.css']
})
export class ProjectItemComponent implements OnInit {
 @Input() Project:any;
 @Output() addProject:EventEmitter<any>=new EventEmitter;
  constructor() { }

  ngOnInit(): void {
  }

}
