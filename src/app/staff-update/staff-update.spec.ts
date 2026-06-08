import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffUpdate } from './staff-update';

describe('StaffUpdate', () => {
  let component: StaffUpdate;
  let fixture: ComponentFixture<StaffUpdate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StaffUpdate],
    }).compileComponents();

    fixture = TestBed.createComponent(StaffUpdate);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
