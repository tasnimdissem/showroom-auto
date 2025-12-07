import { Component, OnInit } from '@angular/core';
import { SearchBar } from './components/search-bar/search-bar';
import { AutoService } from './services/auto.service';
import { Auto } from './interfaces/auto';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SearchBar],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home implements OnInit {
  autos: Auto[] = [];

  constructor(private autoService: AutoService) {}

  ngOnInit(): void {
    this.autos = this.autoService.getAutos();
  }
}
