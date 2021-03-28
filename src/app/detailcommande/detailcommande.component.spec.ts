import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCommandeComponent } from './detailcommande.component';

describe('DetailCommandeComponent', () => {
  let component: DetailCommandeComponent;
  let fixture: ComponentFixture<DetailCommandeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailCommandeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailCommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
