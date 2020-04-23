import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomAddsListingComponent } from './custom-adds-listing.component';

describe('CustomAddsListingComponent', () => {
  let component: CustomAddsListingComponent;
  let fixture: ComponentFixture<CustomAddsListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomAddsListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomAddsListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
