import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FoodService } from '../food/food.service';
import { WeatherService } from '../weather.service';
import { WorkoutService } from '../workout.service';
import { IImage } from './iImage';

@Component({
  selector: 'app-home-component',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css']
})
export class HomeComponent implements OnInit {
  imageUrls: (string | IImage)[] = [];
  mealImages = [];
  meals;
  meals2 = [];
  meals3 = [];
  currentWeather = [];
  workoutDates =  [];
  time: number;
  timeStamp: Date;
  timeStampString: string;
  email: string;
  dates = Array(7);
  latitude: string;
  longitude: string;

  constructor(
    private foodService: FoodService,
    private weatherService: WeatherService,
    private router: Router,
    private httpClient: HttpClient,
    private workoutService: WorkoutService) { }

    getCurrentTime() {
      this.timeStamp = new Date();
      this.timeStampString = this.timeStamp.toString();
    }

    
    
  async getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position);
        this.latitude = position.coords.latitude.toString(),
        this.longitude = position.coords.longitude.toString();
        this.sendWeather1();
        });
      }
  }

  sendWeather1() {
    return this.httpClient.post('/weather', {
      params: {
        latitude: this.latitude,
        longitude: this.longitude
      }
    }, { responseType: 'text' })
    .subscribe(data => {
      data = JSON.parse(data);
      console.log('success', data);
      console.log(data, 'line 99')
      this.currentWeather.push(data)
      console.log(this.currentWeather)
    },
      error => {
        console.log('error', error);
      });
  }
  
  getCookieInfo() {
    let cookie = document.cookie;
    let emailArr = cookie.split('=');
    this.email = emailArr[emailArr.length -1];
  }

  // function that takes a user email and sends post request to the backend endpoint that returns an array of information
  // from the completed strength table and cardio table
  getCompletedWorkouts() {
    // should return a promise with an array in its callback
    // call the get completed workouts function with the email
    this.workoutService.getCompletedWorkouts(this.email)
      .subscribe(compWorkOuts => {
        // use the array of completed workouts to get dates that should be marked on the calender
        if (compWorkOuts) {
          this.workoutDates = this.workoutDates.concat(compWorkOuts);
        }
      });
  }

  getBreakfast() {
    return this.foodService.getBreakfast()
    .subscribe(breakfastFood => {
      this.meals = breakfastFood
      this.mealImages = this.meals.map(meal => {
        let proof = () => {
          window.open(meal.url);
        }
        return {
          url: meal.image,
          href: meal.url,
          clickAction: proof
        }
      })
    })
  }

  getLunch() {
    this.meals = [];
    return this.foodService.getLunch()
      .subscribe(lunchFood => {
        this.meals = lunchFood;
        this.imageUrls = this.meals.map(meal => {
          let proof = () => {
            window.open(meal.url);
          }
          return {
            url: meal.image,
            href: meal.url,
            clickAction: proof
          }
        })
      })
  }


  getDinner() {
    return this.foodService.getDinner()
      .subscribe(dinnerFood => {
        this.meals = dinnerFood;
        this.imageUrls = this.meals.map(meal => {
          let proof = () => {
            window.open(meal.url);
          }
          return {
            url: meal.image,
            href: meal.url,
            clickAction: proof
          }
        })
      });
  }

  getTime() {
    let d = new Date();
    this.time = d.getHours();
    // the current day of the week is
    let day = d.getDay();
    // the date for the current day of the week is
    let date = d.getDate();
    // Set today's date
    this.dates[day] = date;
    // Fill in other dates based on today's
    for (let i = 0; i < day; i++) {
      this.dates[i] = date - (day - i); 
    }
    for (let i = day + 1; i < this.dates.length; i++) {
      this.dates[i] = date + (this.dates.length - i);
    }
    console.log(this.dates);
  }

  testClick(){
    let cookie = document.cookie;
    let emailArr = cookie.split('=')
    let email = emailArr[1]
    console.log(email);
  }

  displayMeal(){
    this.getTime();
    if (this.time >= 21 || this.time < 10) {
      this.getBreakfast();
    } else if (this.time >= 10 && this.time < 14) {
      this.getLunch();
    } else {
      this.getDinner();
    }
  }

  onSubmit() {
    this.router.navigate(['/personalInfo']);
  }

  ngOnInit() {
    this.getLocation();
    // this.getWeather();
    // setTimeout(() => {
    //   this.sendWeather1();
    // }, 4000)
    // setTimeout(() => {
    //   this.getWeather();
    // }, 4500)
    this.getCookieInfo();
    this.getCurrentTime();
    this.displayMeal();
    this.getCompletedWorkouts();
  }
}
