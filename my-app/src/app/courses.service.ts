import { Injectable } from '@angular/core';
import { Course } from './course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
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

  getAllCourses(): Course[] {
    return this.coursesList;
  }

  getCourseById(id: string): Course | void {
    const course = this.coursesList.find(course => course.id === id);
    if(course) {
      return course;
    }
  }
}
