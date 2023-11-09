import { Component, OnInit } from '@angular/core';
import { PopupService } from '../theme/popup.service';

@Component({
  selector: 'app-upload-two',
  templateUrl: './upload-two.component.html',
  styleUrls: ['./upload-two.component.css']
})
export class UploadTwoComponent implements OnInit {

  constructor(public popupService: PopupService) { }

  ngOnInit(): void {
  }

  showSuccess() {
    this.popupService.showSuccessPopup();
  }

}
