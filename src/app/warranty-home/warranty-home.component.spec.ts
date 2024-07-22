import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarrantyHomeComponent } from './warranty-home.component';

describe('WarrantyHomeComponent', () => {
  let component: WarrantyHomeComponent;
  let fixture: ComponentFixture<WarrantyHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WarrantyHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WarrantyHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
