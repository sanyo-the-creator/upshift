import { Component, OnInit } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-pricing',
  templateUrl: './pricing.page.html',
  styleUrls: ['./pricing.page.scss'],
})
export class PricingPage implements OnInit {
  public pageContent = [
    {
      icon: 'lock-open',
      title: 'Today',
      text:'Unlock all app features, like group challenges, side quests and more.'
    },
    {
      icon: 'barbell',
      title: 'In 1 month',
      text:'You will notice a difference in your productivity and focus.'
    },
    {
      icon: 'diamond',
      title: 'In 365 days',
      text:'You will be a different person, with consistent routine, better focus and more energy.'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
