import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AisladoComponent } from './aislado.component';

describe('AisladoComponent', () => {
  let component: AisladoComponent;
  let fixture: ComponentFixture<AisladoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AisladoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AisladoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
