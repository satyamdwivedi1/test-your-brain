import { Component } from '@angular/core';
import { CategoryComponent } from '../category/category.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CategoryComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
