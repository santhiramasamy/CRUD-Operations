import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { Router } from '@angular/router';
import { CrudService } from '../crud.service';


@Component({
  selector: 'app-add-user',
  imports: [ReactiveFormsModule],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent {

  addUserForm : FormGroup;
  

  constructor(private router : Router, private fb : FormBuilder, private crud : CrudService) {
    this.addUserForm = this.fb.group({
      // each form fields below correspond to a form control
      name : [''],
      username : [''],
      email : ['']
    })
  }

 

  onCancel() {
    this.router.navigateByUrl('crud');
      
  }

  

  onSubmit() {
    console.log(this.addUserForm.value);
    this.crud.postData(this.addUserForm.value).subscribe(val => {
      this.router.navigateByUrl('crud');
    })
  }
}
