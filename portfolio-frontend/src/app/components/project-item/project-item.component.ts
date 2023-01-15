import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.css']
})
export class ProjectItemComponent implements OnInit {
 @Input() Project:any;
 @Output() addProject:EventEmitter<any>=new EventEmitter;
 imageObject: Array<object> =[]

  constructor() {

  }

  ngOnInit(): void {
    if(this.Project){
      if(this.Project.images.length>0){
        for(let img of this.Project.images){
          this.imageObject.push({image:img,
            thumbImage:img,
            alt:this.Project.name,
            title:this.Project.name,
          },)
        }

      }
    }
  }


}
