import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { QuestionInfo } from 'src/app/models/questionInfo';
import { Answer } from 'src/app/models/answer';

@Injectable({
  providedIn: 'root',
})
export class QuestionnaireService {
  questions: QuestionInfo[] = [];
  score: number = 0;
  answeredQuestions: string[] = [];
  selectedAnswer$: BehaviorSubject<Answer> = new BehaviorSubject(<Answer>{});

  constructor(private http: HttpClient) {}

  getQuestions(): Observable<QuestionInfo[]> {
    if (this.questions.length) {
      return of(this.questions);
    }
    return this.http.get(
      'https://the-trivia-api.com/v2/questions'
    ) as Observable<QuestionInfo[]>;
  }

  increaseScore(): void {
    this.score++;
  }
}
