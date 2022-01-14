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

  id:number;
  emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  ngOnInit() {
    this.id = Number(localStorage.getItem('id'));
    
  this.addForm = this.formBuilder.group({
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
    let user:User;
    user=new User();
    let value=this.addForm.value;
    user.id=this.id;
    user.nom=value["nom"];
    user.prenom=value["prenom"];
    user.email=value["email"];
    this.userService.update(user,this.id);
    this.router.navigate(['']);
  }

  onCancel() {
    this.router.navigate(['']);
  }
}
