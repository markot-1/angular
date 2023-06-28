import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Course } from 'src/app/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  @Input() course!: Course;
  @Output() newItemEvent = new EventEmitter<any>();

  deleteItem(course: any) {
    this.newItemEvent.emit(course);
  }

  editHandler() {
    console.log('edit');
  }
}

