import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common'; // ⬅️ Tambahkan ini untuk *ngIf

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule], // ❌ Hapus AsyncPipe, tambahkan CommonModule
  templateUrl: './user-profile.component.html',
  // styleUrls: ['./user-profile.component.css'] // ❌ Hapus ini jika file tidak ada
})
export class UserProfileComponent implements OnInit {
  user: any = null;

  constructor(public authService: AuthService) {}

  ngOnInit(): void {
    // ⬇️ Gunakan subscribe, bukan | async
    this.authService.currentUser$.subscribe(
      (data) => {
        this.user = data;
      }
    );
  }

  goBack(): void {
    window.history.back();
  }
}