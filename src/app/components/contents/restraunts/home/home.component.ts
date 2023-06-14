import { Component, OnInit } from '@angular/core';
import { NetworkService } from 'src/app/services/network/network.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private networkService: NetworkService) {}

  OnNetClick(): void {
    this.networkService.GetIpDetails().subscribe((next) => {
      console.log(next);
    });
  }
  OnServer(): void {
    this.networkService.GetServerIpDetails().subscribe((next) => {
      console.log(next);
    });
  }
  ngOnInit(): void {}
}
