import { Component } from '@angular/core';
import { NewsapiserviceService } from '../services/newsapiservice.service';

@Component({
  selector: 'app-business-news',
  templateUrl: './business-news.component.html',
  styleUrls: ['./business-news.component.css']
})
export class BusinessNewsComponent {

  business:any = [];

  constructor(private Business:NewsapiserviceService){}

  ngOnInit(){
    this.Business.businessNews().subscribe((input)=>{
      console.log(input);
      this.business = input.articles;
    })
  }

}
