import { Injectable } from '@angular/core'
import { User } from '../shared/interfaces/user'
import { Subject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _fakeData: User[] = [
    {
      id: 1,
      username: 'test',
      avatar: 'https://www.gorillacircuits.com/wp-content/uploads/2016/01/avatar_placeholder.png',
      role: 'Admin'
    },
    {
      id: 2,
      username: 'bob',
      avatar: 'https://www.gorillacircuits.com/wp-content/uploads/2016/01/avatar_placeholder.png',
      role: 'Admin'
    },
    {
      id: 3,
      username: 'joe',
      avatar: 'https://www.gorillacircuits.com/wp-content/uploads/2016/01/avatar_placeholder.png',
      role: 'Admin'
    },
    {
      id: 4,
      username: 'rick',
      avatar: 'https://www.gorillacircuits.com/wp-content/uploads/2016/01/avatar_placeholder.png',
      role: 'Admin'
    },
    {
      id: 5,
      username: 'morty',
      avatar: 'https://www.gorillacircuits.com/wp-content/uploads/2016/01/avatar_placeholder.png',
      role: 'Admin'
    }
  ]

  private usersChangedSubject: Subject<User[]>

  get UsersUpdated() {
    return this.usersChangedSubject.asObservable()
  }

  constructor() {
    this.usersChangedSubject = new Subject<User[]>()
  }

  public getUser(userID: number) {
    return this._fakeData.find(user => user.id == userID)
  }

  public getUsers() {
    return this._fakeData
  }

  public deleteUser(id: number) {
    let userTODelete = this.getUser(id)
    if (userTODelete) {
      this._fakeData = this._fakeData.filter(user => (user.id == id ? false : true))
      this.triggerUserChanged()
      return true
    }
    return false
  }

  public createUser(newUser: User) {
    this._fakeData.push(newUser)
    this.triggerUserChanged()
  }

  public updateUser(updatedUser: User) {
    let userToUpdateIndex = this._fakeData.findIndex(user => user.id == updatedUser.id)
    if (userToUpdateIndex >= 0) {
      this._fakeData[userToUpdateIndex] = updatedUser
      this.triggerUserChanged()
      return true
    }
    return false
  }

  private triggerUserChanged() {
    this.usersChangedSubject.next(this._fakeData)
  }
}
