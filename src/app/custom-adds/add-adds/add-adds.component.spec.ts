import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAddsComponent } from './add-adds.component';

describe('AddAddsComponent', () => {
  let component: AddAddsComponent;
  let fixture: ComponentFixture<AddAddsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAddsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAddsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
