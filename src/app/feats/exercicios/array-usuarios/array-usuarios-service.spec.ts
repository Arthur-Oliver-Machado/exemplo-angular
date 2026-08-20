import { TestBed } from '@angular/core/testing';

import { ArrayUsuariosService } from './array-usuarios-service';

describe('ArrayUsuariosService', () => {
  let service: ArrayUsuariosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArrayUsuariosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
