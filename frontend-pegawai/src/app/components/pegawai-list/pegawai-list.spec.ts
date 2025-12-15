import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PegawaiList } from './pegawai-list';

describe('PegawaiList', () => {
  let component: PegawaiList;
  let fixture: ComponentFixture<PegawaiList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PegawaiList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PegawaiList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
