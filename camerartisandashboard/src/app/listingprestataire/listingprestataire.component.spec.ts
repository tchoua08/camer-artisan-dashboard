import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingprestataireComponent } from './listingprestataire.component';

describe('ListingprestataireComponent', () => {
  let component: ListingprestataireComponent;
  let fixture: ComponentFixture<ListingprestataireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListingprestataireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingprestataireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
