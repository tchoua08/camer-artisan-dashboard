import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvoimailComponent } from './envoimail.component';

describe('EnvoimailComponent', () => {
  let component: EnvoimailComponent;
  let fixture: ComponentFixture<EnvoimailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvoimailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvoimailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
