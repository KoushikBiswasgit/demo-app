import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-popup',
  template: `
    <div class="popup">
      <p>{{ message }}</p>
    </div>
  `,
  styles: [`
    .popup {
      background-color: #4CAF50;
      color: white;
      padding: 15px;
      border-radius: 5px;
      position: fixed;
      bottom: 20px;
      right: 20px;
    }
  `],
})
export class PopupComponent {
  @Input() message: string = '';

  closePopup() {
    // Add any additional logic for closing the popup if needed
  }
}
