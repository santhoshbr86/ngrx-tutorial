import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Tutorial } from '../models/tutorial.model';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.state';
import * as TutorialActions from '../store/actions/tutorial.actions';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent implements OnInit {
  tutorials;
  loading:boolean = false;
  data:any;
  constructor(private store: Store<AppState>) {
   }

  ngOnInit() {
    this.data = new BehaviorSubject({name:'XYZ', url:'http://one.com'});
    
    this.store.select('tutorial').subscribe(data =>{
        this.tutorials = data.entities;
        this.loading = data.loading;
    });
     this.store.dispatch(new TutorialActions.LoadTutorial());
    }
  removeTutorial(index){
    this.store.dispatch(new TutorialActions.RemoveTutorial(index));
  }
  findDetect(){
    this.data.next({name:'XYZ2', url:'http://one.com'});
  }
}
