import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { MaterialModule } from './material/material.module';
import { ApiService } from './shared/services/api.service';
import { UsersModule } from './users/users.module';
import { BooksModule } from './books/books.module';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, 
    RouterOutlet,
    MaterialModule, 
    AuthModule, 
    SharedModule,
    RouterModule, 
    MatButtonModule, 
    UsersModule,
    BooksModule,
    ],
  
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
}) 
export class AppComponent implements OnInit{

  constructor (private apiService: ApiService){}

  ngOnInit(): void {
      let status = this.apiService.isLoggedIn() ? 'loggedIn':'loggedOff';
      this.apiService.userStatus.next(status);
  }
  title = 'UI';
}
