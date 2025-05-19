import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ParentComponent } from './components/parent/parent.component';
import { HttpClientModule } from '@angular/common/http';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    /*NavbarComponent,
    SidebarComponent,*/
    /*DashboardComponent,*/
    //ParentComponent,
    /*BrowserModule,*/
    HttpClientModule,
    //BrowserAnimationsModule,
    MatProgressSpinnerModule,
    MatListModule,
    MatCheckboxModule,
    MatCardModule,
    FormsModule,
    MatInputModule,
    MatPaginatorModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'sistema-erp';   
}
