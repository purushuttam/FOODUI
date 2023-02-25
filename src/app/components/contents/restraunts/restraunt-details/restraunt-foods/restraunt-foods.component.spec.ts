import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestrauntFoodsComponent } from './restraunt-foods.component';

describe('RestrauntFoodsComponent', () => {
  let component: RestrauntFoodsComponent;
  let fixture: ComponentFixture<RestrauntFoodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestrauntFoodsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestrauntFoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
