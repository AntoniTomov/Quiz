import { Component, OnInit } from '@angular/core';
import { QuestionnaireService } from '../questionnaire/service/questionnaire.service';
import { Observable } from 'rxjs';
import { Answer } from 'src/app/models/answer';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss'],
})
export class FeedbackComponent implements OnInit {
  selectedAnswer$: Observable<Answer> = new Observable();
  score: number = 0;

  constructor(private qService: QuestionnaireService) {}

  ngOnInit(): void {
    this.selectedAnswer$ = this.qService.selectedAnswer$;
    this.score = this.qService.score;
  }
}
