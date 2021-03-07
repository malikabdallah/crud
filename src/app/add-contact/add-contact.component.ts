import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../model/User';
import { UserService } from '../share/user.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router,
     private userService: UserService) { }
      addForm: FormGroup;
      @Output()
      createUsercontact = new EventEmitter<User>();

      emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

      ngOnInit() {
      this.addForm = this.formBuilder.group({
          id: [],
          email: ['', [Validators.required, Validators.pattern(this.emailRegex)]],
          prenom: ['', Validators.required],
          nom: ['', Validators.required]
        });
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
        this.userService.create(this.addForm.value);

        this.router.navigate(['']);
      }

      onCancel(){
        //this.ngOnInit();
        alert("cancel");
      }

}
