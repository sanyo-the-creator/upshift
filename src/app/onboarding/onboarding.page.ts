import { Component, OnInit } from '@angular/core';
import {OnboardingService, Question} from "../services/onboarding.service";
import { Subscription } from "rxjs";


@Component({
  standalone: false,
  selector: 'app-onboarding',
  templateUrl: './onboarding.page.html',
  styleUrls: ['./onboarding.page.scss'],
})
export class OnboardingPage implements OnInit {
  currentQuestion: Question | null = null;
  progress: number = 0;
  quizEnded: boolean = false;
  private subscriptions: Subscription[] = [];
  constructor(private onboardingService: OnboardingService) {
  }

  ngOnInit() {
    this.subscriptions.push(
      this.onboardingService.currentIndex$.subscribe(() => {
        this.currentQuestion = this.onboardingService.getCurrentQuestion();
        this.progress = this.onboardingService.getProgress();
      }
    ));

    this.subscriptions.push(
      this.onboardingService.quizEnded$.subscribe(ended => {
        this.quizEnded = ended
      }
    ));
  }

  public clickedAnswer(answer: string) {
    this.onboardingService.submitAnswer(answer);
  }

  public goBack() {
    this.onboardingService.goToPreviousQuestion();
  }
}
