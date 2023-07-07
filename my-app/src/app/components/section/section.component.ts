import { Component, TrackByFunction, inject } from '@angular/core';
import { Course } from 'src/app/course';
import { CoursesService } from 'src/app/courses.service';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent {
  coursesList: Course[] = [];
  coursesService: CoursesService = inject(CoursesService);

  constructor() {
    this.coursesList = this.coursesService.getAllCourses();
  }

  trackById: TrackByFunction<Course> = (index: number, course: Course) => course.id;

  deleteItemParent(i: number) {
    this.coursesList.splice(i, 1);
  }


  clickHandler() {
    console.log('click');
  }
}
