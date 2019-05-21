import { Component, OnInit, Inject } from '@angular/core'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material'
import { User } from 'src/app/shared/interfaces/user'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { UserService } from '../../user.service'

@Component({
  selector: 'app-edit-create',
  templateUrl: './edit-create.component.html',
  styleUrls: ['./edit-create.component.scss']
})
export class EditCreateComponent {
  isEditing: boolean
  form: FormGroup

  constructor(
    public dialogRef: MatDialogRef<EditCreateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User,
    private userService: UserService,
    private readonly formBuilder: FormBuilder
  ) {
    if (data == null) {
      this.isEditing = false
    } else {
      this.isEditing = true
    }
    this.initForm(data)
    console.log(data)
  }

  initForm(user: User | null) {
    this.form = this.formBuilder.group({
      id: [user ? user.id : '', Validators.required],
      name: [user ? user.username : '', Validators.required],
      avatar: [user ? user.avatar : '', Validators.required],
      role: [user ? user.role : '', Validators.required]
    })
  }

  onNoClick(): void {
    this.dialogRef.close()
  }

  onSaveClick() {
    if (this.form.valid) {
      let editedUser = this.getEditedUser()

      if (this.userService.updateUser(editedUser)) {
        this.dialogRef.close()
      } else {
        alert('an error has occured while saving the user')
      }
    }
  }

  private getEditedUser(): User {
    return {
      id: this.form.controls.id.value,
      username: this.form.controls.name.value,
      avatar: this.form.controls.avatar.value,
      role: this.form.controls.role.value
    }
  }
}
