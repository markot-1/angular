import { Component } from '@angular/core';
import { Course } from 'src/app/course';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent {
  coursesList: Course[] = [
    {
      id: 'Video Course 1',
      title: "Name Tag",
      creationDate: "9 Nov. 2018",
      duration: '1h 28min',
      description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      id: 'Video Course 2',
      title: "Name Tag",
      creationDate: "9 Nov. 2018",
      duration: '1h 28min',
      description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      id: 'Video Course 3',
      title: "Name Tag",
      creationDate: "9 Nov. 2018",
      duration: '1h 28min',
      description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
  ]

  deleteItemParent(course: any) {
    for(let i = 0; i < this.coursesList.length; i++) {
      if(this.coursesList[i] == course) {
        this.coursesList.splice(i, 1);
      }
    }
  } 

  clickHandler() {
    console.log('click');
  }
}
