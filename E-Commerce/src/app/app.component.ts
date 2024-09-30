import { Component } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ModalComponent } from './modal/modal.component';
import { CommonModule } from '@angular/common';   // Import CommonModule for NgClass and general directives
import { FormsModule } from '@angular/forms';     // Import FormsModule for NgModel

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HomeComponent,
    RouterLink,
    RouterModule,
    ModalComponent,
    CommonModule,   // Added CommonModule
    FormsModule     // Added FormsModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  // Fixed typo: 'styleUrl' -> 'styleUrls'
})
export class AppComponent {
  title = 'E-Commerce';
}
