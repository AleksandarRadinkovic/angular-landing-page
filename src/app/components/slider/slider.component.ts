import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  slideData = [
    {
      image:"assets/images/slider1.jpg",
      name: "Almost New sofa",
      owner: "John S",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      price: "$300"
    },
    {
      image:"assets/images/slider2.jpg",
      name: "Beige sofa",
      owner: "Harinder B.",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      price: "$400"
    },
    {
      image:"assets/images/slider3.jpg",
      name: "Almost New sofa",
      owner: "John S",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      price: "$300"
    },
    {
      image:"assets/images/slider1.jpg",
      name: "Almost New sofa",
      owner: "John S",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      price: "$300"
    },
    {
      image:"assets/images/slider2.jpg",
      name: "Beige sofa",
      owner: "Harinder B.",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      price: "$400"
    },
    {
      image:"assets/images/slider3.jpg",
      name: "Almost New sofa",
      owner: "John S",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      price: "$300"
    },
    {
      image:"assets/images/slider1.jpg",
      name: "Almost New sofa",
      owner: "John S",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      price: "$300"
    },
    {
      image:"assets/images/slider2.jpg",
      name: "Beige sofa",
      owner: "Harinder B.",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      price: "$400"
    },
    {
      image:"assets/images/slider3.jpg",
      name: "Almost New sofa",
      owner: "John S",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      price: "$300"
    },
    {
      image:"assets/images/slider1.jpg",
      name: "Almost New sofa",
      owner: "John S",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      price: "$300"
    },
    {
      image:"assets/images/slider2.jpg",
      name: "Beige sofa",
      owner: "Harinder B.",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      price: "$400"
    },
    {
      image:"assets/images/slider3.jpg",
      name: "Almost New sofa",
      owner: "John S",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      price: "$300"
    },
  ]

  config: SwiperOptions = {
    autoHeight: true,
    allowTouchMove: true,
    breakpoints: {
      1024: {
        slidesPerView: 4
      },
      500: {
        slidesPerView: 3
      },
      400: {
        slidesPerView: 2
      },
      300: {
        slidesPerView: 1
      }
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    loop: true
  };

  constructor() { }

  ngOnInit(): void {
  }

}
