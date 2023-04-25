import { Component, OnInit } from '@angular/core';
import { LoadingServiceService } from './services/loading-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'frontEndPortfolio';

  constructor(private loadingService: LoadingServiceService){}

  ngOnInit() {

  }

}
