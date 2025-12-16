import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router'

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  credentials = { username: '', email: '', password: '' };

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(): void {
    this.authService.register(this.credentials.username, this.credentials.email, this.credentials.password).subscribe({
      next: (res) => {
        this.authService.setToken(res.token);
        this.authService.setCurrentUser(res.user);
        alert('Register berhasil! Silakan login.');
        this.router.navigate(['/login']);
      },
      error: (err) => {
        alert('Register gagal: ' + err.error.message);
      }
    });
  }
}