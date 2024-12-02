import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root', // it "Makes the service available throughout the app"  or  "Singleton instance shared across the app"
})
export class ContactsService {
  constructor() {}

  getContacts() {
    // creating a method, contains an array of objects " contactsList"
    const contactList = [
      // array of objects
      { userId: 1, userName: 'Sam Altman' },
      { userId: 2, userName: 'Rummy Dison' },
      { userId: 3, userName: 'Peter Hagde' },
      { userId: 4, userName: 'Tom Khlaski' },
      { userId: 5, userName: 'Hammer Netorious' },
    ];
    return contactList;
  }
  getUserMessage(){
    console.log('Public Method Is calling');
    
  }
}
