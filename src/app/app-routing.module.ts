import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from "./main/main.component";
import { GamersTableComponent } from "./gamers-table/gamers-table.component";
import { GamesTableComponent } from "./games-table/games-table.component";

const routes: Routes = [
  { path: "", redirectTo: 'main/gamers', pathMatch: 'full'},
  { path: "main", redirectTo: 'main/gamers', pathMatch: 'full'},
  { path: "main", component: MainComponent, children: [
    { path: 'gamers', component: GamersTableComponent },
    { path: 'games', component: GamesTableComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
