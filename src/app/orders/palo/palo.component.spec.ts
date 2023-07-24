import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaloComponent } from './palo.component';

describe('PaloComponent', () => {
  let component: PaloComponent;
  let fixture: ComponentFixture<PaloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
