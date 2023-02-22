import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Friend } from './friend';



@Injectable({providedIn: 'root'})

export class FriendService { 
  private friendsUrl = 'api/friends' // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
 
  constructor(private http: HttpClient,) { }
  
/** GET Friends from the server */
getFriends(): Observable<Friend[]> {
  return this.http.get<Friend[]>(this.friendsUrl)
  .pipe(
    catchError(this.handleError<Friend[]>('getFriends', []))
  );
}
  
/** GET Friend by id. Return `undefined` when id not found */
getFriendNo404<Data>(id: number): Observable<Friend> {
  const url = `${this.friendsUrl}/?id=${id}`;
  return this.http.get<Friend[]>(url)
    .pipe(
      map(friends => friends[0]), // returns a {0|1} element array
      catchError(this.handleError<Friend>(`getFriend id=${id}`))
    );
}

  /** GET Friend by id. Will 404 if id not found */
  getFriend(id: number): Observable<Friend> {
    const url = `${this.friendsUrl}/${id}`;
    return this.http.get<Friend>(url).pipe(
      catchError(this.handleError<Friend>(`getFriend id=${id}`))
    );
  }
  /** POST: add a new Friend to the server */
addFriend(friend: Friend): Observable<Friend> {
  return this.http.post<Friend>(this.friendsUrl, friend, this.httpOptions).pipe(
    catchError(this.handleError<Friend>('addFriend'))
  );
}
deleteFriend(id: number): Observable<Friend> {
  const url = `${this.friendsUrl}/${id}`;

  return this.http.delete<Friend>(url, this.httpOptions).pipe(
    catchError(this.handleError<Friend>('deleteFriend'))
  );
}
/**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
  

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
  }
}
