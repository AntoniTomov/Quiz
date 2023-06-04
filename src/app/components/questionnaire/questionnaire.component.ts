import { Component, OnInit } from '@angular/core';
import { QuestionnaireService } from './service/questionnaire.service';
import { take } from 'rxjs';
import { QuestionInfo } from 'src/app/models/questionInfo';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss'],
})
export class QuestionnaireComponent implements OnInit {
  questions: QuestionInfo[] = [];

  constructor(private qService: QuestionnaireService) {}

  ngOnInit(): void {
    this.setQuestions();
  }

  setQuestions(): void {
    this.qService
      .getQuestions()
      .pipe(take(1))
      .subscribe((questions: QuestionInfo[]) => {
        this.qService.questions = questions;
        this.questions = questions.slice(0, 5);
      });
  }
}
