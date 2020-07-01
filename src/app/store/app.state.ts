import { Tutorial } from '../models/tutorial.model';
import { TutorialState } from './reducers/tutorial.reducer';
import { EntityState } from '@ngrx/entity';

export interface AppState{
    readonly tutorial:TutorialState;
}

// export interface TutorialState extends EntityState<TutorialState>{
//     readonly selectedtutorialId:string | number | null;
// }