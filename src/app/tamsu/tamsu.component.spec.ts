import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TamsuComponent } from './tamsu.component';

describe('TamsuComponent', () => {
  let component: TamsuComponent;
  let fixture: ComponentFixture<TamsuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TamsuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TamsuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
