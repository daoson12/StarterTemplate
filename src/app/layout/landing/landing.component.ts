import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.loadScript('../assets/js/jquery.min.js');

    this.loadScript('../assets/js/bootstrap.bundle.min.js');
    this.loadCSS('../assets/css/bootstrap.min.css');
    this.loadCSS('../assets/css/landing.css');




 }

 public loadScript(url: string) {
   const body = <HTMLDivElement> document.body;
   const script = document.createElement('script');
   script.innerHTML = '';
   script.src = url;
   script.async = false;
   script.defer = true;
   body.appendChild(script);
 }

 public loadCSS(url:string):any {
   var head = document.getElementsByTagName('head')[0];

   var style = document.createElement('link');
   style.href = url;
   style.type = 'text/css';
   style.rel = 'stylesheet';
   head.append(style);
  }

}
