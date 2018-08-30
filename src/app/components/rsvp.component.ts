import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-rsvp',
  templateUrl: './rsvp.component.html',
  styleUrls: ['./rsvp.component.css']
})
export class RsvpComponent implements OnInit {

  @ViewChild('rsvpForm')
  rsvpForm: NgForm;

  constructor() { }

  ngOnInit() {
  }

  processRSVP(){
    console.log('processing');
    for (let i in this.rsvpForm.value) {
      console.log('i = ', i, ' v= ', this.rsvpForm.value[i]);
    }
    this.rsvpForm.resetForm();
  }
}
