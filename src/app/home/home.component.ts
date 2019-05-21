import { Component, OnInit } from '@angular/core'
import { UserService } from './user.service'
import { User } from '../shared/interfaces/user'
import { MatDialog } from '@angular/material'
import { EditCreateComponent } from './dialogs/edit-create/edit-create.component'

export interface PeriodicElement {
  name: string
  position: number
  weight: number
  symbol: string
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  displayedColumns: string[] = ['ID', 'Username', 'Role', 'Avatar', 'Actions']
  dataSource: Array<User>

  constructor(private userService: UserService, public dialog: MatDialog) {}

  ngOnInit() {
    this.dataSource = this.userService.getUsers()
    this.userService.UsersUpdated.subscribe(users => {
      console.log('users updated', users)
      this.dataSource = users
    })
  }

  openEditDialog(user: User): void {
    const dialogRef = this.dialog.open(EditCreateComponent, {
      width: '250px',
      data: user
    })

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed')
      // this.animal = result;
    })
  }
}
