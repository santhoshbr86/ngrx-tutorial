import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as tutorialActions from '../actions/tutorial.actions';
import { TutorialService } from '../../service/tutorial.service';
import { map, switchMap, mergeMap} from 'rxjs/operators';

@Injectable()
export class TutorialEffects {
  constructor(private actions$: Actions, private tutorialService: TutorialService) {}
  
  @Effect()
  loadTutorial$ = this.actions$.pipe(
      ofType(tutorialActions.LOAD_TUTORIAL),
      mergeMap(
          () => {
            return this.tutorialService.getTutorial().pipe(
              map( res => new tutorialActions.LoadTutorialSuccess(res))
          )
      })
    );
    
  @Effect()
  addTutorial$ = this.actions$.pipe(
      ofType(tutorialActions.ADD_TUTORIAL),
      mergeMap(
          (data) => {
            return this.tutorialService.addTutorial(data).pipe(
              map( data => new tutorialActions.LoadTutorial())
          )
      })
    );

  @Effect()
  removeTutorial$ = this.actions$.pipe(
      ofType(tutorialActions.REMOVE_TUTORIAL),
      mergeMap(
          (data) => {
            return this.tutorialService.removeTutorial(data.payload).pipe(
              map( data => new tutorialActions.LoadTutorial())
          )
      })
    )
  
}
 