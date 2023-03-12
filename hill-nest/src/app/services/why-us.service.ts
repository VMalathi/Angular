import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WhyUsService {
 
  constructor() { }

  //Why us details

  whyUsDetails = [
    { list: "Wellness & poll" },
    { list: "Free wifi" },
    { list: "Bar & garden with terrace" },
    { list: "Delicious breakfast" },
    { list: "High customer satisfaction" },
    { list: "Good parking & security" },
    { list: "Clean room service" },
    { list: "Discount coupons" },
  ]
}
