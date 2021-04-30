import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreItemDescriptionComponent } from './store-item-description.component';

describe('StoreItemDescriptionComponent', () => {
  let component: StoreItemDescriptionComponent;
  let fixture: ComponentFixture<StoreItemDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreItemDescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreItemDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
