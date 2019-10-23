import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YearlySubscriptionComponent } from './yearly-subscription.component';

describe('YearlySubscriptionComponent', () => {
  let component: YearlySubscriptionComponent;
  let fixture: ComponentFixture<YearlySubscriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YearlySubscriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YearlySubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
