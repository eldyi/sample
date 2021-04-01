import { LOGIN_FORM } from './../../global/FORMS';
import { HttpsService } from './../../service/https.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private http: HttpsService, private fb: FormBuilder) {}

  credentials = this.fb.group({});
  ngOnInit() {
    this._form();
    this.http.me().subscribe((res: any) => {
      console.log(res);
    });
  }

  _form() {
    LOGIN_FORM.forEach((el) => {
      console.log(el);
    });
  }
}
