import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tutorial } from '../models/tutorial.model';
import { delay } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class TutorialService {

  constructor(private http: HttpClient) { }
  getTutorial(){
    return this.http.get<Tutorial[]>('/api/tutorial').pipe(
       delay(1000)
    );
  }
  addTutorial(data){
    const { name, url } = data.payload;
    return this.http.post('/api/tutorial', {name, url}).pipe(
      delay(1000)
    );
  }
  removeTutorial(id){
    return this.http.delete('/api/tutorial/'+id).pipe(
      delay(1000)
    );
  }
}
