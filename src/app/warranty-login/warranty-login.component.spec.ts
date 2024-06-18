import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarrantyLoginComponent } from './warranty-login.component';

describe('WarrantyLoginComponent', () => {
  let component: WarrantyLoginComponent;
  let fixture: ComponentFixture<WarrantyLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WarrantyLoginComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WarrantyLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
