import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import {BehaviorSubject, Observable} from 'rxjs';

// key that is used to access the data in local storage
const STORAGE_KEY = 'user_session';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _currentObject = new BehaviorSubject<boolean>(true);
  private currentObject;

  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) { }

  public storeOnLocalStorage(objectString: string[]): void {
    this.storage.remove(STORAGE_KEY);

    this.currentObject  = objectString;

    // insert updated array to local storage
    this.storage.set(STORAGE_KEY, this.currentObject);

    if (this.storage.get(STORAGE_KEY)[0].length > 0) {
      // console.log(this.storage.get(STORAGE_KEY) || 'Local storage is empty');
      this._currentObject.next(true);
    }

    // console.log(this.storage.get(STORAGE_KEY) || 'Local storage is empty');
  }

  public getUserDetails() {
    return this.storage.get(STORAGE_KEY) || [];
  }

  getDetails(): Observable<boolean> {
    return this._currentObject.asObservable();
  }

  logOut() {
    this.storage.clear();
    this._currentObject.next(true);
  }

}
