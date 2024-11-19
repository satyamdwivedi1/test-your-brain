import { Routes } from '@angular/router';
import { DashboardComponent } from './views/pages/dashboard/dashboard.component';
import { CategoryComponent } from './views/pages/category/category.component';
import { SubCategoryComponent } from './views/pages/sub-category/sub-category.component';
import { QuestionsComponent } from './views/pages/questions/questions.component';

export const routes: Routes = [
    {path: '', component: DashboardComponent},
    {path: 'category', component: CategoryComponent},
    {path: 'sub-category', component: SubCategoryComponent},
    {path: 'questions', component: QuestionsComponent}
];
