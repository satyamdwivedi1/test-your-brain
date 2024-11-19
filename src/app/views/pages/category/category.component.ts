import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CategoryService } from '../../../services/category.service';
import { Category } from '../../../models/category';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [RouterModule, HttpClientModule, CommonModule],
  providers: [CategoryService],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent implements OnInit {
  categories: Category[] = [];
  groupedCategory: {type: string, data:any[]}[] = [];
  showLoading: boolean = false;

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.getAllCategory();
  }

  async getAllCategory() {
    try {
      this.categories = await this.categoryService.get().toPromise() as Category[];
      this.groupedCategory = this.getGroupedCategory();
      console.log(this.getGroupedCategory())
      this.showLoading = false;
    } catch (error) {
      console.log(error);
      this.showLoading = false;
    }
  }

  getGroupedCategory() {
    const grouped: any = [];
    this.categories.forEach(item => {
      const existingGroup = grouped.find((group: any) => group.type === item.type);
      if (existingGroup) {
        existingGroup.data.push(item);
      } else {
        grouped.push({ type: item.type, data: [item] });
      }
    });
    return grouped
  }

  get bgColor(){
    return this.categoryService.generateBgColor();
  }
}

