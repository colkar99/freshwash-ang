import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneTimeWashComponent } from './one-time-wash.component';

describe('OneTimeWashComponent', () => {
  let component: OneTimeWashComponent;
  let fixture: ComponentFixture<OneTimeWashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneTimeWashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneTimeWashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
