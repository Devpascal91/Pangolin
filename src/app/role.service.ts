import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Role } from './role';
import { ROLES } from './mock-roles';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  // constructor(private roleService: RoleService) { }
  
  getRoles(): Observable<Role[]> {
    const roles = of(ROLES);
    return roles;
  }
  getRole(id: number): Observable<Role> {
    // For now, assume that arolewith the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const role= ROLES.find(r=> r.id === id)!;
    return of(role);
  }
}
