import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pegawai, PegawaiService } from '../../services/pegawai.service';
import { FormsModule } from '@angular/forms'; // ⬅️ Tambahkan ini
import { CommonModule } from '@angular/common'; // ⬅️ Tambahkan ini

@Component({
  selector: 'app-pegawai-edit',
  standalone: true,
  imports: [FormsModule, CommonModule], // ⬅️ Tambahkan CommonModule
  templateUrl: './pegawai-edit.component.html',
  styleUrls: ['./pegawai-edit.component.css']
})
export class PegawaiEditComponent implements OnInit {
  pegawai: Pegawai | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pegawaiService: PegawaiService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.loadPegawai(id);
    }
  }

  loadPegawai(id: string): void {
    this.pegawaiService.getPegawaiById(id).subscribe(
      (data) => {
        this.pegawai = data;
      },
      (error) => {
        console.error('Gagal mengambil data pegawai:', error);
      }
    );
  }

  onSubmit(): void {
    if (this.pegawai) {
      this.pegawaiService.updatePegawai(this.pegawai._id!, this.pegawai).subscribe(() => {
        alert('Pegawai berhasil diperbarui');
        this.router.navigate(['/pegawai']);
      });
    }
  }

  goBack(): void {
    this.router.navigate(['/pegawai']);
  }
}