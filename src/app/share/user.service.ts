import { Injectable } from '@angular/core';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  usercontacts: User[] = [{
    id: 0,
    prenom: 'Alex',
    nom: 'BlaBla',
    email: 'alex.blabla@aol.at'
  },
  {
    id: 1,
    prenom: 'Otto',
    nom: 'Blubb',
    email: 'otto.blubb@dsl.de'
  },
  {
    id: 2,
    prenom: 'Peter',
    nom: 'Pan',
    email: 'peter.pan@neverland.com'
  }];

  create(usercontact: User) {
    const itemIndex = this.usercontacts.length;
    usercontact.id = this.getnextId();
    console.log(usercontact);
    this.usercontacts[itemIndex] = usercontact;
  }

  delete(usercontact: User) {
    this.usercontacts.splice(this.usercontacts.indexOf(usercontact), 1);
  }

  update(usercontact: User,id:number) {
    //const itemIndex = this.usercontacts.findIndex(item => item.id === usercontact.id);
    console.log(id);
    console.log(usercontact);
    this.usercontacts[id] = usercontact;
  }

  getall(): User[] {
    console.log('usercontactservice:getall');
    console.log(this.usercontacts);
    return this.usercontacts;
  }

  reorderUserContacts(usercontact: User) {
    console.log('Zur Info:', usercontact);
    this.usercontacts = this.usercontacts
      .map(uc => uc.id === usercontact.id ? usercontact : uc)
      .sort((a, uc) => uc.id - uc.id);
  }

  getUserById(id: number) {
    console.log(id);
    const itemIndex = this.usercontacts.findIndex(item => item.id === id);
    console.log(itemIndex);
    return this.usercontacts[itemIndex];
  }

  getnextId(): number {
    let highest = 0;
    this.usercontacts.forEach(function (item) {
      if (highest === 0) {
        highest = item.id;
      }
      if (highest < item.id) {
        highest = item.id;
      }
    });
    return highest + 1;
  }

}
