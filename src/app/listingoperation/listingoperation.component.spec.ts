import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingoperationComponent } from './listingoperation.component';

describe('ListingoperationComponent', () => {
  let component: ListingoperationComponent;
  let fixture: ComponentFixture<ListingoperationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListingoperationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingoperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
