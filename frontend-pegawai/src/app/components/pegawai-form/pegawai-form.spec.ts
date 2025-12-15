import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PegawaiFormComponent } from './pegawai-form'; // ✅ Ubah dari 'PegawaiForm' ke 'PegawaiFormComponent'

describe('PegawaiFormComponent', () => { // ✅ Ubah dari 'PegawaiForm' ke 'PegawaiFormComponent'
  let component: PegawaiFormComponent; // ✅ Ubah dari 'PegawaiForm' ke 'PegawaiFormComponent'
  let fixture: ComponentFixture<PegawaiFormComponent>; // ✅ Ubah dari 'PegawaiForm' ke 'PegawaiFormComponent'

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PegawaiFormComponent] // ✅ Ubah dari 'PegawaiForm' ke 'PegawaiFormComponent'
    })
    .compileComponents();

    fixture = TestBed.createComponent(PegawaiFormComponent); // ✅ Ubah dari 'PegawaiForm' ke 'PegawaiFormComponent'
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});