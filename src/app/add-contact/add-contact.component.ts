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
      userForm: FormGroup;

    
      emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

      ngOnInit() {
    
        this.userForm = this.formBuilder.group({
          firstName: ['', [Validators.required]],
          lastName: '',
          email: '',
          drinkPreference: ''
        });
      }

      isInvalid(name: string) {
        const control = this.userForm.get(name);
        return control.invalid && control.dirty;
      }

      isEmailInvalid(name: string) {
        const control = this.userForm.get(name);
        return control.invalid && control.dirty;
      }

     

      onCancel(){
        //this.ngOnInit();
        alert("cancel");
      }

      onSubmitForm() {
        const formValue = this.userForm.value;
        const newUser = new User();
        alert(formValue['firstName']);
        alert(formValue['lastName']);
        alert(formValue['email']);
        newUser.prenom=formValue['firstName'];
        newUser.nom=formValue['lastName'];
        newUser.email=formValue['email'];
       
        
        this.userService.create(newUser);
        this.router.navigate(['']);

      }

}
