import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pegawai, PegawaiService } from '../../services/pegawai.service';
import { CommonModule } from '@angular/common'; // ⬅️ Tambahkan ini

@Component({
  selector: 'app-pegawai-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pegawai-detail.component.html',
  styleUrls: ['./pegawai-detail.component.css']
})
export class PegawaiDetailComponent implements OnInit {
  pegawai: Pegawai | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pegawaiService: PegawaiService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      console.log('Mengambil data pegawai dengan ID:', id); // 🔥 Tambahkan ini
      this.loadPegawai(id);
    } else {
      console.error('ID tidak ditemukan di URL'); // 🔥 Tambahkan ini
    }
  }

  loadPegawai(id: string): void {
    this.pegawaiService.getPegawaiById(id).subscribe({
      next: (data) => {
        console.log('Data pegawai berhasil dimuat:', data); // 🔥 Tambahkan ini
        this.pegawai = data;
      },
      error: (error) => {
        console.error('Gagal mengambil data pegawai:', error); // 🔥 Tambahkan ini
        alert('Gagal memuat data pegawai');
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/pegawai']);
  }
}