import { Component, OnInit } from '@angular/core';
import { PopupService } from '../theme/popup.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public popupService: PopupService) { }

  ngOnInit(): void {
  }

  showSuccess() {
    this.popupService.showSuccessPopup();
  }

}
