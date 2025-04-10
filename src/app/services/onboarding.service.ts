import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import {Router} from "@angular/router";

export interface Answer {
  id: number;
  answer: string;
}

export interface Question {
  id: number;
  question: string;
  answers: Answer[];
}

@Injectable({
  providedIn: 'root'
})
export class OnboardingService {
  private questions: Question[] = [
    {
      id: 0,
      question: 'What is your experience level?',
      answers: [
        { id: 0, answer: 'Beginner' },
        { id: 1, answer: 'Intermediate' },
        { id: 2, answer: 'Advanced' }
      ]
    },
    {
      id: 1,
      question: 'How often do you practice?',
      answers: [
        { id: 0, answer: 'Daily' },
        { id: 1, answer: 'Weekly' },
        { id: 2, answer: 'Monthly' }
      ]
    }
  ];

  private currentIndexSubject = new BehaviorSubject<number>(0);
  currentIndex$ = this.currentIndexSubject.asObservable();

  private userAnswersSubject = new BehaviorSubject<string[]>([]);
  userAnswers$ = this.userAnswersSubject.asObservable();

  private quizEndedSubject = new BehaviorSubject<boolean>(false);
  quizEnded$ = this.quizEndedSubject.asObservable();

  constructor(private router: Router) { }

  public getCurrentQuestion(): Question | null {
    const currentIndex = this.currentIndexSubject.getValue();
    if (currentIndex >= 0 && currentIndex < this.questions.length) {
      return this.questions[currentIndex];
    }
    return null;
  }

  public submitAnswer(answer: string): void {
    const answers = [...this.userAnswersSubject.getValue(), answer];
    this.userAnswersSubject.next(answers);

    const nextIndex = this.currentIndexSubject.getValue() + 1;
    if (nextIndex < this.questions.length) {
      this.currentIndexSubject.next(nextIndex);
    } else {
      this.quizEndedSubject.next(true);
    }
  }

  public getProgress(): number {
    const totalQuestions = this.questions.length;

    if (this.quizEndedSubject.getValue()) {
      return 1;
    }
    const currentIndex = this.currentIndexSubject.getValue();
    return totalQuestions > 0 ? currentIndex + 1 / totalQuestions : 0;
  }

  public goToPreviousQuestion(): boolean {
    if (this.quizEndedSubject.getValue()) {
      this.quizEndedSubject.next(false);
      this.getProgress()
      const lastQuestionIndex = this.questions.length - 1;
      this.currentIndexSubject.next(lastQuestionIndex);

      return true;
    }

    const currentIndex = this.currentIndexSubject.getValue();

    if (currentIndex > 0) {
      const answers = this.userAnswersSubject.getValue();
      if (answers.length > 0) {
        const newAnswers = answers.slice(0, -1);
        this.userAnswersSubject.next(newAnswers);
      }

      this.currentIndexSubject.next(currentIndex - 1);
      return true;
    }

    this.router.navigate(['/signup']);
    return false;
  }

  resetQuestionnaire(): void {
    this.currentIndexSubject.next(0);
    this.userAnswersSubject.next([]);
  }
}
