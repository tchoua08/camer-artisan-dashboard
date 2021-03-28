import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailprestataireComponent } from './detailprestataire.component';

describe('DetailprestataireComponent', () => {
  let component: DetailprestataireComponent;
  let fixture: ComponentFixture<DetailprestataireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailprestataireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailprestataireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
