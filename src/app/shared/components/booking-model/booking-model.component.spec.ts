import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingModelComponent } from './booking-model.component';

describe('BookingModelComponent', () => {
  let component: BookingModelComponent;
  let fixture: ComponentFixture<BookingModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
