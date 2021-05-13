import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingcommentaireComponent } from './listingcommentaire.component';

describe('ListingcommentaireComponent', () => {
  let component: ListingcommentaireComponent;
  let fixture: ComponentFixture<ListingcommentaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListingcommentaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingcommentaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
