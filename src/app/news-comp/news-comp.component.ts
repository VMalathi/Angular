import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NewsapiserviceService } from '../services/newsapiservice.service';

@Component({
  selector: 'app-news-comp',
  templateUrl: './news-comp.component.html',
  styleUrls: ['./news-comp.component.css']
})
export class NewsCompComponent {

  topHeadingNews:any = [];

  constructor(private newsService:NewsapiserviceService){ }

  ngOnInit(): void {
    this.newsService.topHeading().subscribe((input)=>{
      console.log(input);
      this.topHeadingNews=input.articles;
    });
  }

  getNews(){
    
  }
}
