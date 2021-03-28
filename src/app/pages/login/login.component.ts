import { HttpsService } from './../../service/https.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private http: HttpsService) {}

  ngOnInit() {
    this.http.me().subscribe((res: any) => {
      console.log(res);
    });
  }
}
