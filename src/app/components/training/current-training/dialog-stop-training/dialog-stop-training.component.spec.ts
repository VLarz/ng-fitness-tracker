import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogStopTrainingComponent } from './dialog-stop-training.component';

describe('DialogStopTrainingComponent', () => {
  let component: DialogStopTrainingComponent;
  let fixture: ComponentFixture<DialogStopTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogStopTrainingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogStopTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
