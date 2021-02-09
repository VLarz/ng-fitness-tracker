import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  maxDate: Date = new Date();

  constructor() { }

  ngOnInit(): void {
    console.log(this.maxDate);
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);
    console.log(this.maxDate);
  }

  onSubmit(form: NgForm): void {
    console.log(form.value);
  }

}