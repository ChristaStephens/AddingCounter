import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddingCounterComponent } from './adding-counter.component';

describe('AddingCounterComponent', () => {
  let component: AddingCounterComponent;
  let fixture: ComponentFixture<AddingCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddingCounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddingCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
