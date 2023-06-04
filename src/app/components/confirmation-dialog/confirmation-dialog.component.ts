import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { QuestionnaireService } from '../questionnaire/service/questionnaire.service';
import { Answer } from 'src/app/models/answer';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss'],
})
export class ConfirmationDialogComponent implements OnInit {
  selectedAnswer$: Observable<Answer> = new Observable();

  constructor(private qService: QuestionnaireService) {}

  ngOnInit(): void {
    this.selectedAnswer$ = this.qService.selectedAnswer$;
  }

  validateAnswer(selectedAnswer: Answer): void {
    this.qService.answeredQuestions.push(selectedAnswer.questionId);
    if (selectedAnswer.validity) {
      this.qService.increaseScore();
    }
  }
}
