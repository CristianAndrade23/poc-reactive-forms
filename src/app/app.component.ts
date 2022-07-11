import {Component} from '@angular/core';
import {FormArray, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  form = this.fb.group({
    name: '',
    phone: '',
    animals: this.fb.group({
      dogs: false,
      cat: false,
      reptiles: false
    }),
    emails: this.fb.array([this.fb.group({
      email: ''
    })])
  });

  constructor(private fb: FormBuilder) {}

  submit(): void{
    console.log('form', this.form);
  }

  get emails(): FormArray {
    return this.form.get('emails') as FormArray;
  }
}
