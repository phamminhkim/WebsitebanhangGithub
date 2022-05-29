import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThoisuComponent } from './thoisu.component';

describe('ThoisuComponent', () => {
  let component: ThoisuComponent;
  let fixture: ComponentFixture<ThoisuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThoisuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThoisuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
