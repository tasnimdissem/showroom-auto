import { Injectable } from '@angular/core';
import { Auto } from '../interfaces/auto';

@Injectable({ providedIn: 'root' })
export class AutoService {
  private readonly autos: Auto[] = [
    { id:1, brand: 'Mercedes Benz', model: 'C-CLASS', price: 230, power: 9, photo: 'gla.png', availability: 4, description: 'A luxury sedan with advanced features.' },
    { id:2, brand: 'Mercedes Benz', model: 'GLA', price: 203, power: 8, photo: 'gla.png', availability: 4, description: 'A compact luxury SUV with modern design.' },
    { id:3, brand: 'Mercedes Benz', model: 'GLE', price: 450, power: 17, photo: 'gla.png', availability: 4, description: 'A midsize luxury SUV with powerful performance.' },
    { id:4, brand: 'Jaguar', model: 'F-Pace', price: 399, power: 16, photo: 'evoque.png', availability: 4, description: 'A luxury SUV with sporty performance.' },
    { id:5, brand: 'Jaguar', model: 'E-PACE', price: 350, power: 12, photo: 'evoque.png', availability: 4, description: 'A compact luxury SUV with sporty performance.' },
    { id:6, brand: 'Audi', model: 'Q3 CROSSBACK', price: 230, power: 9, photo: 'a3.png', availability: 3, description: 'A compact luxury SUV with modern design.' },
    { id:7, brand: 'Audi', model: 'Q5', price: 350, power: 16, photo: 'a3.png', availability: 3, description: 'A midsize luxury SUV with powerful performance.' },
    { id:8, brand: 'Audi', model: 'A3 BACK', price: 145, power: 8, photo: 'a3.png', availability: 3, description: 'A compact luxury sedan with modern design.' },
    { id:9, brand: 'BMW', model: 'X2 SDRIVE PACK', price: 245, power: 8, photo: 'x2.jpg', availability: 3, description: 'A compact luxury SUV with sporty performance.' },
    { id:10, brand: 'BMW', model: 'IX', price: 432, power: 11, photo: 'x2.jpg', availability: 3, description: 'A luxury electric SUV with advanced technology.' },
    { id:11, brand: 'BMW', model: 'X3 HYBRIDE', price: 355, power: 11, photo: 'x3.jpg', availability: 3, description: 'A midsize luxury SUV with hybrid technology.' },
    { id:12, brand: 'Land Rover', model: 'Range Rover Evoque', price: 340, power: 9, photo: 'evoque.png', availability: 4, description: 'A compact luxury SUV with modern design.' },
    { id:13, brand: 'Land Rover', model: 'Defender 90', price: 398, power: 21, photo: 'evoque.png', availability: 4, description: 'A rugged off-road SUV with advanced capabilities.' },
    { id:14, brand: 'Land Rover', model: 'Range Rover', price: 702, power: 24, photo: 'evoque.png', availability: 4, description: 'A full-size luxury SUV with advanced features.' },
    { id:15, brand: 'Alfa Romeo', model: 'Stelvio', price: 268, power: 18, photo: 'stelvio.png', availability: 11, description: 'A luxury SUV with sporty performance.' },
    { id:16, brand: 'Alfa Romeo', model: 'Giulia', price: 198, power: 18, photo: 'stelvio.png', availability: 11, description: 'A luxury sedan with sporty performance.' }
  ];

  getAutos(): Auto[] {
    return this.autos;
  }

  getAutoById(id: number): Auto | undefined {
    return this.autos.find(a => a.id === id);
  }
}
