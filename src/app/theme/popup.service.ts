import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PopupService {
  isPopupOpen = false;
  isSuccessPopupOpen = false;

  togglePopup() {
    this.isPopupOpen = !this.isPopupOpen;
  }

  showSuccessPopup() {
    this.isSuccessPopupOpen = true;
    setTimeout(() => {
      this.isSuccessPopupOpen = false;
    }, 4000); // Close after 3 seconds
  }
}
