import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalDialogComponent } from './final-dialog.component';

describe('FinalDialogComponent', () => {
  let component: FinalDialogComponent;
  let fixture: ComponentFixture<FinalDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FinalDialogComponent]
    });
    fixture = TestBed.createComponent(FinalDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
