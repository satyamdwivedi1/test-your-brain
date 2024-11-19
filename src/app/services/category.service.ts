import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/category';

@Injectable({ providedIn: 'root' })
export class CategoryService {
    hexCharacters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
    constructor(private http: HttpClient) { }

    get(): Observable<Category[]> {
        return this.http.get<Category[]>('http://localhost:5255/api/category');
    }

    create(category: Category): Observable<boolean> {
        return this.http.post<boolean>('http://localhost:5255/api/category', category);
    }

    getCharacter(index: number) {
        return this.hexCharacters[index]
    }

    generateBgColor() {
        let hexColorRep = "#"
        for (let position = 0; position < 6; position++) {
            hexColorRep += this.getCharacter(position)
        }
        return hexColorRep
    }
}