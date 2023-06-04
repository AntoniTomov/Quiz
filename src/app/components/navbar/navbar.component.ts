import { Component, OnInit } from '@angular/core';
import { Answer } from 'src/app/models/answer';
import { QuestionnaireService } from '../questionnaire/service/questionnaire.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(private qService: QuestionnaireService) {}

  ngOnInit(): void {}

  resetGame() {
    this.qService.answeredQuestions = [];
    this.qService.questions = [];
    this.qService.score = 0;
    this.qService.selectedAnswer$.next(<Answer>{});
  }
}
