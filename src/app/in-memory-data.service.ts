import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Friend } from './friend';


@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{
createDb() {

  const friends = [

  { id: 12, name: 'Cryo' },
  { id: 13, name: 'Pyro' },
  { id: 14, name: 'Hydro' },
  { id: 15, name: 'Anemo' },
  { id: 16, name: 'Geo' },
  { id: 17, name: 'Dendro' },
  { id: 18, name: 'Electro' }
  ];
  return {friends};
  }
  genId(friends: Friend[]): number {
    return friends.length > 0 ? Math.max(...friends.map(friend => friend.id)) + 1 : 11;
  }

}
