import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadTwoComponent } from './upload-two.component';

describe('UploadTwoComponent', () => {
  let component: UploadTwoComponent;
  let fixture: ComponentFixture<UploadTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
