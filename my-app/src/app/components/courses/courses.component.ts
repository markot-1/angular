import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements Course{

  // Применяю директиву @input
  @Input() item!: string;

  // Применяю директиву @output
  @Output() newItemEvent = new EventEmitter<string>();

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }

  // Изучаю event binding

  onKeydown($event: any) {
    console.log($event);
  }

  // Создаем экземпляр интерфейса

  id = 'Video 1';
  title = "education video";
  creationDate = new Date();
  duration = '1h 38min';
  description = "First video on this page";

}

interface Course {
  id:string,
  title: string,
  creationDate: Date,
  duration: string,
  description: string,
}
