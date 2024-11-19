import { AfterViewInit, Component, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements AfterViewInit {
  @ViewChild("navArea") nav: any;

  ngAfterViewInit(): void {
    
  }
  
  @HostListener('window:scroll', [])
  onScroll(): void {
    if (window.pageYOffset > 0) {
      this.nav.nativeElement.classList.add("is-sticky");
      this.nav.nativeElement.classList.add("color_white");
      this.nav.nativeElement.getElementsByClassName("login_button")[0].classList.add("pt-3");
      this.nav.nativeElement.getElementsByClassName("login_button")[0].classList.remove("pt-4");
    } else {
      this.nav.nativeElement.classList.remove("is-sticky");
      this.nav.nativeElement.classList.remove("color_white");
      this.nav.nativeElement.getElementsByClassName("login_button")[0].classList.remove("pt-3");
      this.nav.nativeElement.getElementsByClassName("login_button")[0].classList.add("pt-4");
    }
  }

}
