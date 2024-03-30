import { RandomUser } from '../../models/random-user';
import { RandomUserService } from './../../services/random-user-service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-random-user',
  templateUrl: './random-user.component.html',
  styleUrls: ['./random-user.component.css']
})
export class RandomUserComponent implements OnInit {
  randomUser!: RandomUser;
  constructor(
   private readonly randomUserService: RandomUserService) { }

  ngOnInit(): void {
    this.getRandomUser();
  }

  getRandomUser() {   
    ;
    this.randomUserService.getRandomUser()
      .subscribe(user => {
        this.randomUser = user;
      });
  }
}
