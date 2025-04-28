import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-user',
  imports: [ReactiveFormsModule],
  templateUrl: './update-user.component.html',
  styleUrl: './update-user.component.css'
})
export class UpdateUserComponent implements OnInit {
   
  updateUserForm : FormGroup
  constructor(private crud: CrudService, private activeRoute : ActivatedRoute, private router : Router, private fb : FormBuilder) {
    this.updateUserForm = this.fb.group({
      // each form fields below correspond to a form control
      id : [''],
      name : [''],
      username : [''],
      email : ['']
    })
  }

  userData : any;

  /* Definite Assignment (! Operator)
  This tells TypeScript that userId will be assigned later in ngOnInit(). */
  userId! : {
    uid : number;
  }

  ngOnInit(): void {
    this.userId = {
      uid : this.activeRoute.snapshot.params['id']
      // this.activeRoute -> provides information about the current route
      // snapshot -> property of ActivatedRoute that provides snapshot of the current route param
      // params -> it is a property of snapshot that contains object in the routes param
      // id -> accessinng the id value from routes parameter
    }
    console.log(this.userId.uid);

    this.crud.getDataById(this.userId.uid).subscribe(res => {
      this.userData = res;
      this.updateUserForm.setValue({ id: this.userData.id, name: this.userData.name, username: this.userData.username, email: this.userData.email})
    })

  }

  onSubmit(){
    this.crud.putDataById(this.userId.uid, this.updateUserForm.value).subscribe(res => {
      this.router.navigateByUrl('crud');
    })
  }

  onCancel() {
    this.router.navigateByUrl('crud');
      
  }
  
}
