import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, AfterViewInit {
  navItems : any;
  ngAfterViewInit(): void {
    this.navItems = document.querySelectorAll(".navigation ul li");
    // this.navItems.forEach((item: any) => {
    //   item.addEventListener("click", this.activeLink.bind(this));
    // });
  }
  ngOnInit(): void {
    
  }

 

  activeLink(event: any, elemt: any) {
    console.log(event, elemt);
    this.navItems.forEach((item: any) => {
      item.classList.remove("active");
    });

    elemt.classList.add("active");
  }
          



constructor() { }


}
