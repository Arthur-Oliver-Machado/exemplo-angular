import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExemploHttp } from './exemplo-http';

describe('ExemploHttp', () => {
  let component: ExemploHttp;
  let fixture: ComponentFixture<ExemploHttp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExemploHttp],
    }).compileComponents();

    fixture = TestBed.createComponent(ExemploHttp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
