import { Component } from '@angular/core';
import { NewsapiserviceService } from '../services/newsapiservice.service';

@Component({
  selector: 'app-tech-news',
  templateUrl: './tech-news.component.html',
  styleUrls: ['./tech-news.component.css']
})
export class TechNewsComponent {

  technicalNews:any = [];

  constructor(private techNews:NewsapiserviceService){}

  ngOnInit(){
    this.techNews.techNews().subscribe((input)=>{
      //console.log(input);
      this.technicalNews = input.articles;
    })
  }
}
