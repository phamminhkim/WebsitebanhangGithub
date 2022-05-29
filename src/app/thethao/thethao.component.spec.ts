import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThethaoComponent } from './thethao.component';

describe('ThethaoComponent', () => {
  let component: ThethaoComponent;
  let fixture: ComponentFixture<ThethaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThethaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThethaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
