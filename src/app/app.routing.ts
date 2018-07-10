import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { SingleComponent } from './views/single/single.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'single/:id', component: SingleComponent }
];
