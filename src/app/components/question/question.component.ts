import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionInfo } from 'src/app/models/questionInfo';
import { QuestionnaireService } from '../questionnaire/service/questionnaire.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent implements OnInit {
  @Input() question: QuestionInfo = {} as QuestionInfo;
  answers: string[] = [];
  openDialog = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private qService: QuestionnaireService
  ) {}

  ngOnInit(): void {
    this.answers = this.getAnswers();
  }

  getAnswers(): string[] {
    let answers = [
      ...this.question.incorrectAnswers,
      this.question.correctAnswer,
    ];
    answers = answers.sort(() => 0.5 - Math.random());
    return answers;
  }

  goToConfirmationDialog(answerValue: string): void {
    const isQuestionAnswered = this.qService.answeredQuestions.includes(
      this.question.id
    );
    if (isQuestionAnswered) {
      this.openDialog = true;
    } else {
      this.updateSelectedAnswer(answerValue);
      this.router.navigate(['/confirmation-dialog'], {
        relativeTo: this.route,
      });
    }
  }

  updateSelectedAnswer(answerValue: string): void {
    const answer = {
      questionId: this.question.id,
      value: answerValue,
      validity: answerValue === this.question.correctAnswer,
    };
    this.qService.selectedAnswer$.next(answer);
  }
}
