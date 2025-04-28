import { Component } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-view-user',
  imports: [],
  templateUrl: './view-user.component.html',
  styleUrl: './view-user.component.css',
})
export class ViewUserComponent {
  constructor(
    private crud: CrudService,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) {}
  userData: any;

  /* Definite Assignment (! Operator)
  This tells TypeScript that userId will be assigned later in ngOnInit(). */
  userId!: {
    uid: number;
  };

  ngOnInit(): void {
    this.userId = {
      uid: this.activeRoute.snapshot.params['id'],
      // this.activeRoute -> provides information about the current route
      // snapshot -> property of ActivatedRoute that provides snapshot of the current route param
      // params -> it is a property of snapshot that contains object in the routes param
      // id -> accessinng the id value from routes parameter
    };
    console.log(this.userId.uid);

    this.crud.getDataById(this.userId.uid).subscribe((res) => {
      this.userData = res;
    });
  }

  onClose() {
    this.router.navigateByUrl('crud');
  }
}
