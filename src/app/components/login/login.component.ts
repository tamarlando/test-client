import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private fb: FormBuilder, private loginService: LoginService, private router: Router) { }

  userForm: FormGroup;
  ngOnInit() {
    this.userForm = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
      chatId: ['', Validators.required]

    },
    );
  }

  submit() {
    this.loginService.get(this.userForm.value).subscribe(user => {
      this.loginService.setCurrentUser(user);
      this.router.navigate(['/chat', this.userForm.value['chatId']])
    });
  }
}
