import { TestBed } from '@angular/core/testing';

import { Pegawai } from './pegawai';

describe('Pegawai', () => {
  let service: Pegawai;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Pegawai);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
