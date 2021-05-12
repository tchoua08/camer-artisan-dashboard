import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouteroperationComponent } from './ajouteroperation.component';

describe('AjouteroperationComponent', () => {
  let component: AjouteroperationComponent;
  let fixture: ComponentFixture<AjouteroperationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouteroperationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouteroperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
