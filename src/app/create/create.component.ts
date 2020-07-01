import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Tutorial,  } from '../models/tutorial.model';
import * as TutorialActions from '../store/actions/tutorial.actions';

import { Store } from '@ngrx/store';
import { AppState } from '../store/app.state';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
    
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }
  addTutorial(name,url){
    this.store.dispatch(new TutorialActions.AddTutorial({_id:null,name:name, url:url}));
  }
  
}
