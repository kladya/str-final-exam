import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users$: BehaviorSubject<User[]> = this.userService.userList;

  user: User = new User;
  phrase: string = '';
  searchKey: string = 'name';
  sorterKey: string = '';

  constructor(
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.userService.getAll();
  }

  onDelete(user: User): void {
    this.userService.remove(user);
  }

  confirmDelete(user: User): void {
    this.user = user;
    $('#confirmationDialog').on('shown.bs.modal', function () {
      $('#cancelButton').trigger('focus')
    })
  }

  onColumnSelect(key: string): void {
    this.sorterKey = key;
  }
}
