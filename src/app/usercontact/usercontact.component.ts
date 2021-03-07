import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/User';
import { UserService } from '../share/user.service';

@Component({
  selector: 'app-usercontact',
  templateUrl: './usercontact.component.html',
  styleUrls: ['./usercontact.component.css']
})
export class UsercontactComponent implements OnInit {

       usercontacts: User[]; // Array<string>
        usercont: User;

        constructor(private ucs: UserService, private router: Router) {
        }

        editUserContact(usercontact: User) {
          console.log(usercontact);
          localStorage.removeItem('editUserId');
          localStorage.setItem('editUserId', usercontact.id.toString());
          this.router.navigate(['edit']);
          // this.ucs.update(usercontact);
        }

        deleteUserContact(usercontact: User) {
          console.log(usercontact);
          this.ucs.delete(usercontact);
        }

        ngOnInit() {
          console.log('usercontact:init');
          this.usercontacts = this.ucs.getall();
          console.log(this.usercontacts);
        }
}
