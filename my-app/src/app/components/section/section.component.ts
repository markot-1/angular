import { Component } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent {
  // Код необходимый для директивы @input
  currentItem = 'Kek';

  // Код необходимый для директивы @output
  items =['item1', 'item2'];

  addItem(newItem: string) {
    this.items.push(newItem);
  }
}
