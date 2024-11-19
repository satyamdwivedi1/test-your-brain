import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [RouterModule, HeaderComponent, DashboardComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

}
