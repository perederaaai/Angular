import { Injectable } from '@angular/core';
import { catchError, delay, map, Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

export interface ITodo {
  completed: boolean,
  title: string,
  id?: number
}

export interface INewToDo extends ITodo {
  id: number
}

@Injectable({providedIn: 'root'})

export class httpClientService {
  constructor(public http: HttpClient) {
  }

  addTitle(userPost: ITodo): Observable<ITodo> {
    const customHeaders = new HttpHeaders({
      'customNum': Math.random().toString()
    });
    return this.http.post<ITodo>('https://jsonplaceholder.typicode.com/todos', userPost, {
      headers: customHeaders
    })
  }

  downloadData(): Observable<ITodo[] | null> {
    let settingParams = new HttpParams();
    settingParams = settingParams.append('_limit', '5')

    return this.http.get<ITodo[] | null>('https://jsonplaceholder.typicode.com/todos', {
      params: settingParams,
      observe: 'response',
    })
      .pipe(
        map(response => {
          console.log(response, 'response')
          return response.body
        }),
        delay(400),
        catchError(error => {
          console.log('Error is ', error.message)
          return throwError(error)
        })
      )
  }

  removePost(id?: number): Observable<void> {
    return this.http.delete<void>(`https://jsonplaceholder.typicode.com/todos/${id}`)
  }

  completed(id?: number): Observable<ITodo> {
    return this.http.put<ITodo>(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        completed: false
      }
    )
  }
}

