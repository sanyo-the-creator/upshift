import { Component, OnInit } from '@angular/core';


interface Answer {
  id: number;
  answer: string;
}

interface Question {
  id: number;
  question: string;
  answers: Answer[];
}

@Component({
  standalone: false,
  selector: 'app-onboarding',
  templateUrl: './onboarding.page.html',
  styleUrls: ['./onboarding.page.scss'],
})
export class OnboardingPage implements OnInit {
  public currentQuestion:Question | null = null;
  public questionList: Question [] = [
    {
      id: 0,
      question: 'Whatap nigga whattap cuh mohli by sme byt fake zebraci no asi ne, robota normalny zivot neni pre nas asi ne',
      answers: [
        {
          id: 0,
          answer: 'Good'
        },
        {
          id: 1,
          answer: 'Sybau'
        },
        {
          id: 2,
          answer: 'WHAT?'
        }
      ]
    },
    {
      id: 1,
      question: 'Are you the top G?',
      answers: [
        {
          id: 0,
          answer: 'YASS DADDY'
        },
        {
          id: 1,
          answer: '??'
        },
        {
          id: 2,
          answer: 'gay'
        }
      ]
    }
  ]

  constructor() {
    this.currentQuestion = this.questionList[0]
  }

  ngOnInit() {
  }

}
