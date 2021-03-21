import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingcommandeComponent } from './listingcommande.component';

describe('ListingcommandeComponent', () => {
  let component: ListingcommandeComponent;
  let fixture: ComponentFixture<ListingcommandeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListingcommandeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingcommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
