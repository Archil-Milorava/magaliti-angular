import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SatestoComponent } from './satesto.component';

describe('SatestoComponent', () => {
  let component: SatestoComponent;
  let fixture: ComponentFixture<SatestoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SatestoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SatestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
