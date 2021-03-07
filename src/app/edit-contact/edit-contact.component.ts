import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../model/User';
import { UserService } from '../share/user.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {

 
  constructor(private formBuilder: FormBuilder, private router: Router,
     private userService: UserService) { }
  addForm: FormGroup;
  usercontact: User;

  emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  ngOnInit() {
    const userId = localStorage.getItem('editUserId');
    if (!userId) {
      alert('Invalid action.');
      this.router.navigate(['']);
      return;
    }
  this.addForm = this.formBuilder.group({
      id: [],
      email: ['', [Validators.required, Validators.pattern(this.emailRegex)]],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required]
    });
    const data = this.userService.getUserById(+userId);
    this.addForm.setValue(data);
  }

    isInvalid(name: string) {
    const control = this.addForm.get(name);
    return control.invalid && control.dirty;
  }

  isEmailInvalid(name: string) {
    const control = this.addForm.get(name);
    return control.invalid && control.dirty;
  }

  onSubmit() {
    this.userService.update(this.addForm.value);
    this.router.navigate(['']);
  }

  onCancel() {
    this.router.navigate(['']);
  }
}
