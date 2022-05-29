import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiaitriComponent } from './giaitri.component';

describe('GiaitriComponent', () => {
  let component: GiaitriComponent;
  let fixture: ComponentFixture<GiaitriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GiaitriComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GiaitriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
