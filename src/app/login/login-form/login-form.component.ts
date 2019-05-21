import { Component, OnInit, Output, EventEmitter } from '@angular/core'
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms'
import { UserCredentials } from 'src/app/shared/interfaces/user-credentials'

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  form: FormGroup
  username: FormControl
  password: FormControl
  passwordHidden = true

  @Output()
  submitEvent = new EventEmitter<UserCredentials>()

  constructor(private readonly formBuilder: FormBuilder) {}

  ngOnInit() {
    this.username = new FormControl('', [Validators.required])
    this.password = new FormControl('', [Validators.required])
    this.form = this.formBuilder.group({
      username: this.username,
      password: this.password
    })
  }

  onSubmit() {
    if (this.form.valid) {
      const credentials: UserCredentials = {
        username: this.username.value,
        password: this.password.value
      }
      this.submitEvent.emit(credentials)
    }
  }
}
