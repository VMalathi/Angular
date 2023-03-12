import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FeaturesService {

  constructor() { }

  featureDetails = [
    {
      image:"bi-house",
      name: "Rooms",
      detail: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores"
    },
    {
      image:"bi-tree",
      name: "Garden",
      detail: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores"
    },
    {
      image:"bi-egg-fried",
      name: "Food",
      detail: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores"
    },
    {
      image:"bi-wifi",
      name: "Wifi",
      detail: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores"
    },
    {
      image:"bi-taxi-front-fill",
      name: "Transport",
      detail: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores"
    },
    {
      image:"bi-people",
      name: "Customer Satisfaction",
      detail: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores"
    }
  ]
}
