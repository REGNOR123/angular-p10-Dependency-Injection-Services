import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../contacts.service';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
})
export class ContactsComponent implements OnInit {
  constructor(private contactsServices: ContactsService) {}

  contactList = [];
  ngOnInit(): void {
    this.contactList = this.contactsServices.getContacts();
  }
}
