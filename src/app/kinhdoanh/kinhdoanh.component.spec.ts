import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KinhdoanhComponent } from './kinhdoanh.component';

describe('KinhdoanhComponent', () => {
  let component: KinhdoanhComponent;
  let fixture: ComponentFixture<KinhdoanhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KinhdoanhComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KinhdoanhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
