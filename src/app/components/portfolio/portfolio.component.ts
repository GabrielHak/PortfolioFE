import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  sectionsInfo = [{
    "id": "",
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
  
    
  constructor(private portfolioData: PortfolioService){

  }

  ngOnInit(){
    this.portfolioData.getSections().subscribe(data => {
      this.sectionsInfo = data;
      this.sectionsInfo.forEach(section => {
        this.portfolioData.getSubsection(section.title).subscribe(sub => {
          section.subsections = sub;
        })
      });
    });
  }
}
