import { Component, OnInit } from '@angular/core';
import { PortfolioService } from './services/portfolio.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'PortfolioFE';

  sectionsInfo = [
  {
    "title": "",
    "subtitle": "",
    "paragraph": "",
    "img": "",
    "subsections": [
      {
        "title": "",
        "subtitle": "",
        "img": "",
        "graph": "",
      }
    ]
  }];
  
  constructor(private portfolioData: PortfolioService){}

  ngOnInit(){
    this.portfolioData.getData().subscribe(data => {
      this.sectionsInfo = data;
      console.log(data);
    });
  }
}
