import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Course } from 'src/app/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  @Input() course!: Course;
  @Input() i!: number;
  @Output() newItemEvent = new EventEmitter<Course>();

  deleteItem(course: Course) {
    this.newItemEvent.emit(course);
  }

  editHandler(i: number) {
    console.log(i);
  }
}

