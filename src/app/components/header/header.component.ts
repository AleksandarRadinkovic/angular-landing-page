import { Component, OnInit, HostListener  } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public screenWidth: any;

  ngOnInit():void {
      this.screenWidth = window.innerWidth;
  }
  @HostListener('window:resize', ['$event'])

  onResize(event) {
    this.screenWidth = window.innerWidth;
  }


}
