import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutermetierComponent } from './ajoutermetier.component';

describe('AjoutermetierComponent', () => {
  let component: AjoutermetierComponent;
  let fixture: ComponentFixture<AjoutermetierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutermetierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutermetierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
