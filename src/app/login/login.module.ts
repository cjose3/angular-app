import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'
import { LoginRoutingModule } from './login-routing.module'
import { LoginComponent } from './login.component'
import { SharedModule } from '../shared/shared.module'
import { LoginFormComponent } from './login-form/login-form.component'
import { MaterialModule } from './material.module'
import { FlexLayoutModule } from '@angular/flex-layout'

@NgModule({
  declarations: [LoginComponent, LoginFormComponent],
  imports: [CommonModule, SharedModule, LoginRoutingModule, ReactiveFormsModule, MaterialModule, FlexLayoutModule]
})
export class LoginModule {}
