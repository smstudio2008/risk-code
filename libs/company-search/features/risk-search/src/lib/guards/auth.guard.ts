import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
    providedIn: 'root',
})
export class AuthGuard implements CanActivate {
    constructor(private router: Router) { }

    public canActivate(): boolean {
        const isAuthenticated = !!sessionStorage.getItem('userToken'); // Check if the token exists

        if (!isAuthenticated) {
            alert('You are not logged in. Please log in to access this page.');
            return false;
        }

        return true;
    }
}
