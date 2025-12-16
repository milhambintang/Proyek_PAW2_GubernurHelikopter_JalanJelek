import { Component } from '@angular/core';
import { Pegawai, PegawaiService } from '../../services/pegawai.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pegawai-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './pegawai-form.html',
  styleUrls: ['./pegawai-form.css']
})
export class PegawaiFormComponent {
  pegawai: Pegawai = {
    nama: '',
    nip: '',
    tempat_lahir: '',
    tanggal_lahir: '',
    jenis_kelamin: '',
    alamat: '',
    no_telepon: '',
    email: '',
    jabatan: '',
    tanggal_masuk: '',
    status: ''
  };

  constructor(private pegawaiService: PegawaiService, private router: Router) {}

  onSubmit(): void {
    this.pegawaiService.addPegawai(this.pegawai).subscribe(() => {
      alert('Pegawai berhasil ditambahkan');
      this.router.navigate(['/pegawai']);
    });
  }
}