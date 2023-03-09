import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestrauntProfileComponent } from './restraunt-profile.component';

describe('RestrauntProfileComponent', () => {
  let component: RestrauntProfileComponent;
  let fixture: ComponentFixture<RestrauntProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestrauntProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestrauntProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
