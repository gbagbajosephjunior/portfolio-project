import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownlodeComponent } from './downlode.component';

describe('DownlodeComponent', () => {
  let component: DownlodeComponent;
  let fixture: ComponentFixture<DownlodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DownlodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DownlodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
