import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreItemAddComponent } from './store-item-add.component';

describe('StoreItemAddComponent', () => {
  let component: StoreItemAddComponent;
  let fixture: ComponentFixture<StoreItemAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreItemAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreItemAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
