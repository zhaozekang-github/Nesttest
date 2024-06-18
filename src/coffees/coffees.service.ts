import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Coffee } from './entities/coffee.entity';
import { TeaService } from 'src/tea/tea.service';

@Injectable()
export class CoffeesService {
  constructor(private teaService: TeaService) {}
  private coffees: Coffee[] = [
    {
      id: 1,
      name: 'Cappuccino',
      brand: 'Starbucks',
      flavors: 'Caramel',
    },
    {
      id: 2,
      name: 'Sunflower',
      brand: 'NNNm',
      flavors: 'Viooi',
    },
  ];

  findAll() {
    return `this action returns all Tea ` + this.teaService.findAll();
    // return this.coffees;
  }

  findOne(id: string) {
    const res = this.coffees.find((coffee) => coffee.id === +id);
    if (!res) {
      throw new HttpException(`Coffee #${id} not found`, HttpStatus.NOT_FOUND);
    }
    return res;
  }

  findTable() {
    return 'this action retuns all Tables';
    // return this.coffees;
  }

  create(createCoffeeDto: any) {
    this.coffees.push(createCoffeeDto);
    return createCoffeeDto;
  }

  update(id: string, updateCoffeeDto: any) {
    const existingCoffee = this.findOne(id);
    if (existingCoffee) {
      console.log(updateCoffeeDto);
      // update
    }
  }

  remove(id: string) {
    const coffeeIndex = this.coffees.findIndex((item) => item.id === +id);
    if (coffeeIndex >= 0) {
      this.coffees.splice(coffeeIndex, 1);
    }
  }
}
