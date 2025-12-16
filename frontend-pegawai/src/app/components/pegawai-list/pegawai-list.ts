import { Component, OnInit } from '@angular/core';
import { Pegawai, PegawaiService } from '../../services/pegawai.service';
import { CommonModule } from '@angular/common';
// import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pegawai-list',
  standalone: true,
  imports: [CommonModule],
  // imports: [CommonModule, RouterLink],
  templateUrl: './pegawai-list.html',
  styleUrls: ['./pegawai-list.css']
})
export class PegawaiListComponent implements OnInit {
  pegawaiList: Pegawai[] = [];

  constructor(private pegawaiService: PegawaiService) {}

  ngOnInit(): void {
    this.loadPegawai();
  }

  loadPegawai(): void {
    this.pegawaiService.getPegawai().subscribe(
      (data) => {
        this.pegawaiList = data;
      },
      (error) => {
        console.error('Gagal mengambil data pegawai:', error);
      }
    );
  }

  deletePegawai(id: string): void {
    if (confirm('Yakin ingin menghapus pegawai ini?')) {
      this.pegawaiService.deletePegawai(id).subscribe(() => {
        this.loadPegawai(); // Refresh daftar
      });
    }
  }
}