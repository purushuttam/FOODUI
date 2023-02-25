import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestrauntDetailsComponent } from './restraunt-details.component';

describe('RestrauntDetailsComponent', () => {
  let component: RestrauntDetailsComponent;
  let fixture: ComponentFixture<RestrauntDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestrauntDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestrauntDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
