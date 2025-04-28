import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { User } from '../user';

import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crud',
  imports: [CommonModule],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.css',
})
export class CRUDComponent implements OnInit {
  apiData: User[] = []; //to access data in the api
  constructor(private crud: CrudService, private router: Router) {}

  ngOnInit(): void {
    this.getAllData();
  }

  getAllData() {
    this.crud.getData().subscribe((res) => {
      this.apiData = res;
    });
  }

  addNewUser() {
    this.router.navigateByUrl('addUser'); // navigateByUrl navigates to the redirected component
  }

  onUpdate(id: number) {
    this.router.navigate(['updateUser', id]); // use navigate here as we have to pass the id or any extra parameter along with the route
  }

  onView(id: number) {
    this.router.navigate(['viewUser', id]);
  }

  onDelete(id: number) {
    this.crud.deleteData(id).subscribe(res => {
      this.getAllData();
      alert("Record Deleted Successfully!");
      this.getAllData();
    });
  }
}
