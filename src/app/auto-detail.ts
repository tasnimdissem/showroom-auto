import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CurrencyPipe, NgIf } from '@angular/common';
import { AutoService } from './services/auto.service';
import { Auto } from './interfaces/auto';

@Component({
  selector: 'app-auto-detail',
  standalone: true,
  imports: [NgIf, RouterLink, CurrencyPipe],
  templateUrl: './auto-detail.html',
  styleUrls: ['./auto-detail.css']
})
export class AutoDetail implements OnInit {
  auto: Auto | undefined;

  constructor(private route: ActivatedRoute, private autoService: AutoService) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.auto = this.autoService.getAutoById(id);
  }
}
