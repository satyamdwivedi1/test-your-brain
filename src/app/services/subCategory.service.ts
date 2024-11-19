import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SubCategory } from '../models/subCategory';

@Injectable({providedIn: 'root'})
export class SubCategoryService {
    constructor(private http: HttpClient) { }
    
    get():Observable<SubCategory[]>{
        return this.http.get<SubCategory[]>('http://localhost:5255/api/subcategory');
    }

    create(subCategory: SubCategory):Observable<boolean>{
        return this.http.post<boolean>('http://localhost:5255/api/subcategory', subCategory);
    }
}