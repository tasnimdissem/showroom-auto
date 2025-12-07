import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Auto } from '../../interfaces/auto';
import { CurrencyPipe, NgClass } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  imports: [CurrencyPipe, NgClass, FormsModule],
  standalone: true,
  templateUrl: './search-bar.html',
  styleUrls: ['./search-bar.css'],
})
export class SearchBar implements OnInit {
  @Input() autos: Auto[]=[];

  @Output() onSelectAuto = new EventEmitter<Auto>();

  selectedAutos: Auto[] = [];
  searchQuery: string = '';
  sortBy: 'name' | 'price-asc' | 'price-desc' = 'name';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.selectedAutos = this.autos;
  }

  selectAutoList(query: string) {
    this.searchQuery = query;
    const normalized = (query ?? '').trim().toLowerCase();

    if (!normalized) {
      this.selectedAutos = [...this.autos];
    } else {
      this.selectedAutos = this.autos.filter(auto =>
        `${auto.brand} ${auto.model}`.toLowerCase().includes(normalized)
      );
    }
    this.applySorting();
  }

  applySorting(): void {
    if (this.sortBy === 'price-asc') {
      this.selectedAutos.sort((a, b) => a.price - b.price);
    } else if (this.sortBy === 'price-desc') {
      this.selectedAutos.sort((a, b) => b.price - a.price);
    } else {
      this.selectedAutos.sort((a, b) => 
        (a.brand + a.model).localeCompare(b.brand + b.model)
      );
    }
  }

  onSortChange(): void {
    this.applySorting();
  }

  showDetails(auto: Auto) {
    this.onSelectAuto.emit(auto);
    this.router.navigate(['/auto', auto.id]);
  }
}


