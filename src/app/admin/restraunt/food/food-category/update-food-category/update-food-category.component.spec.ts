import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFoodCategoryComponent } from './update-food-category.component';

describe('UpdateFoodCategoryComponent', () => {
  let component: UpdateFoodCategoryComponent;
  let fixture: ComponentFixture<UpdateFoodCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateFoodCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateFoodCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
