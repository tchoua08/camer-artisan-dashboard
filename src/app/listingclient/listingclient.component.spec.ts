import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingclientComponent } from './listingclient.component';

describe('ListingclientComponent', () => {
  let component: ListingclientComponent;
  let fixture: ComponentFixture<ListingclientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListingclientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
