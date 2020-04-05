import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
    this.loadCSS('../assets/css/index-plugins.css');
    this.loadCSS('../assets/css/bootstrap.min.css');
    this.loadCSS('../assets/css/index-main.css');
    this.loadCSS('https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');
    this.loadScript('../assets/js/core.min.js');
    this.loadScript('../assets/js/main.js');
  }

  loginSignup() {
    this.router.navigate(['dashboard']);
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
