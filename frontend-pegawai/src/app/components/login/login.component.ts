import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  credentials = { email: '', password: '' };

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(): void {
    this.authService.login(this.credentials.email, this.credentials.password).subscribe({
      next: (res) => {
        this.authService.setToken(res.token);
        this.authService.setCurrentUser(res.user);
        alert('Login berhasil!');
        this.router.navigate(['/pegawai']);
      },
      error: (err) => {
        alert('Login gagal: ' + err.error.message);
      }
    });
  }
}