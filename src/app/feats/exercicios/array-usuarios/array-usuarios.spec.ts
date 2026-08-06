import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayUsuarios } from './array-usuarios';

describe('ArrayUsuarios', () => {
  let component: ArrayUsuarios;
  let fixture: ComponentFixture<ArrayUsuarios>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArrayUsuarios],
    }).compileComponents();

    fixture = TestBed.createComponent(ArrayUsuarios);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
