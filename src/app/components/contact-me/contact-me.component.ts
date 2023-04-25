import { Component, OnInit } from '@angular/core';
import emailjs from '@emailjs/browser';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})
export class ContactMeComponent implements OnInit{
 myForm: FormGroup;


constructor(private fb: FormBuilder) {
    emailjs.init('X8CCd0mPWtfjM77Xo');
    this.myForm = this.fb.group({
      from_name: ['', [Validators.required]],
      email: ['', [Validators.pattern(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/), Validators.required]],
      project: [''],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
}

ngOnInit(): void {

}

sendEmail(e :Event) {
  if (this.myForm.valid) {
    emailjs.sendForm('default_service', 'template_32kp5wr', e.target as HTMLFormElement)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        this.myForm.reset(); // reinicia el formulario después de enviarlo
      }, (error) => {
        console.log('FAILED...', error);
      });
  }
}

}
