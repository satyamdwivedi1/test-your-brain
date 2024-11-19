import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from '../models/question';

@Injectable({providedIn: 'root'})
export class QuestionService {
    constructor(private http: HttpClient) { }
    
    get():Observable<Question[]>{
        return this.http.get<Question[]>('http://localhost:5255/api/question');
    }

    create(question: Question):Observable<boolean>{
        return this.http.post<boolean>('http://localhost:5255/api/question', question);
    }
}