import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  token: string| null= null;
  
  constructor(private router: Router){}
  ngOnInit(): void {
    this.token = sessionStorage.getItem('token');
  }

  logout(){
     sessionStorage.removeItem('token')
    this.router.navigate(['/home'])
    location.reload();
  }

}
