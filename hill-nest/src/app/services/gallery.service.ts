import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor() { }

  galleryDetails = [
    {
      image:"../../assets/img/resort.jpg",
      name: "Resort1",
      category: "Resort"
    },
    {
      image:"../../assets/img/dining.jpg",
      name: "Resort2",
      category: "Resort"
    },
    {
      image:"../../assets/img/living-room.jpg",
      name: "Resort3",
      category: "Resort"
    },
    {
      image:"../../assets/img/garden1.jpg",
      name: "Resort4",
      category: "Resort"
    },
    {
      image:"../../assets/img/garden2.jpg",
      name: "Resort5",
      category: "Resort"
    },
    {
      image:"../../assets/img/room1.jpg",
      name: "Resort6",
      category: "Resort"
    }
  ]
}
