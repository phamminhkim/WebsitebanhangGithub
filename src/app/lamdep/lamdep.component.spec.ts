import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LamdepComponent } from './lamdep.component';

describe('LamdepComponent', () => {
  let component: LamdepComponent;
  let fixture: ComponentFixture<LamdepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LamdepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LamdepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
