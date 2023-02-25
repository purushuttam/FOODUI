import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestrauntsComponent } from './restraunts.component';

describe('RestrauntsComponent', () => {
  let component: RestrauntsComponent;
  let fixture: ComponentFixture<RestrauntsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestrauntsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestrauntsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
