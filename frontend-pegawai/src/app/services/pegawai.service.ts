import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Pegawai {
  _id?: string;
  nama: string;
  nip: string;
  tempat_lahir: string;
  tanggal_lahir: string;
  jenis_kelamin: string;
  alamat: string;
  no_telepon: string;
  email: string;
  jabatan: string;
  tanggal_masuk: string;
  status: string;
}

@Injectable({
  providedIn: 'root'
})
export class PegawaiService {
  private apiUrl = 'http://localhost:5000/api/pegawai';

  constructor(private http: HttpClient) { }

  getPegawai(): Observable<Pegawai[]> {
    return this.http.get<Pegawai[]>(this.apiUrl);
  }

  addPegawai(data: Pegawai): Observable<Pegawai> {
    return this.http.post<Pegawai>(this.apiUrl, data);
  }

  updatePegawai(id: string, data: Pegawai): Observable<Pegawai> {
    return this.http.put<Pegawai>(`${this.apiUrl}/${id}`, data);
  }

  deletePegawai(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}