import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { MaterialModule } from './material/material.module';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,MaterialModule, AuthModule, SharedModule, RouterModule, MatButtonModule, RouterLink, RouterLinkActive],
  
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'UI';
}
