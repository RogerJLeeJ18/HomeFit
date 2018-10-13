import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {
  regimen = [];
  constructor(private httpClient: HttpClient) { }

  getRegimenFromDB(userID) {
    return this.httpClient.get('/recallWOs', {
      params: {
        userId: userID
      }
    }) 
  }

  getCompletedWorkouts(email) {
    console.log('making get request')
    return this.httpClient.get('/getCompletedWO', {
      params: {
        email: email
      }
    });
  }
}