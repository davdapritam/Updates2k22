import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  mainCoordinator = '../../assets/MainCoordinators/keyur.jpeg'

  customOptions: OwlOptions = {
    loop: true,
    autoWidth: true,
    autoplay: true,
    autoplayTimeout: 2000,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 100,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      550: {
        items: 2
      },
      600: {
        items: 3
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

  mainCoordinators = [
    { id: 1, img: '../../assets/MainCoordinators/keyur.jpeg', name: 'Keyur Kakadiya' },
    { id: 2, img: "../../assets/MainCoordinators/1.jpeg", name: 'Vrushant Bhanderi' },
    { id: 3, img: "../../assets/MainCoordinators/yashPansuriya.jpeg", name: 'Yash Pansheriya' },
    { id: 4, img: "../../assets/MainCoordinators/2.jpeg", name: 'Jash Shah' },
    { id: 5, img: "../../assets/MainCoordinators/shailija.png", name: 'Shailja Patel' },
    { id: 6, img: "../../assets/MainCoordinators/shivani.jpeg", name: 'Shivani Sopariwala' },
  ];
  slides = [
    { id: 1, img: '../../assets/FacultyCoordinators/vandanaJoshi.jpeg', name: 'Prof. Vandana joshi'},
    { id: 2, img: '../../assets/FacultyCoordinators/nitiyaKomalan.jpeg', name: 'Ms. Nitya komalan' },
    { id: 3, img: "../../assets/FacultyCoordinators/yuktiDesai.jpeg", name:'Ms. Yukti Desai' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  goToLink(url: string) {
    window.open(url, "_blank")
  }
}
