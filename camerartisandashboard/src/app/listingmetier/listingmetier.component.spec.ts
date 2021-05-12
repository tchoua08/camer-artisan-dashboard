import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingmetierComponent } from './listingmetier.component';

describe('ListingmetierComponent', () => {
  let component: ListingmetierComponent;
  let fixture: ComponentFixture<ListingmetierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListingmetierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingmetierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
