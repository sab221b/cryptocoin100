import { Component, OnInit } from '@angular/core';
import { CryptocoinService } from 'src/app/services/cryptocoin.service';

interface Country {
  name: string;
  flag: string;
  area: number;
  population: number;
}

const COUNTRIES: Country[] = [
  {
    name: 'Russia',
    flag: 'f/f3/Flag_of_Russia.svg',
    area: 17075200,
    population: 146989754
  },
  {
    name: 'Canada',
    flag: 'c/cf/Flag_of_Canada.svg',
    area: 9976140,
    population: 36624199
  },
  {
    name: 'United States',
    flag: 'a/a4/Flag_of_the_United_States.svg',
    area: 9629091,
    population: 324459463
  },
  {
    name: 'China',
    flag: 'f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
    area: 9596960,
    population: 1409517397
  }
];

@Component({
  selector: 'app-cryptocoin-list',
  templateUrl: './cryptocoin-list.component.html',
  styleUrls: ['./cryptocoin-list.component.scss']
})
export class CryptocoinListComponent implements OnInit {

  isCollapsed = false;
  countries = COUNTRIES;
  records: any[] = [];
  columns = [
    { name: 'Name', prop: 'name' }, { name: 'title' }, { name: 'Description', prop: 'description' }, { name: 'Num Tokens', prop: 'num_tokens' },
    { name: 'Average Price Change', prop: 'avg_price_change' }, { name: 'Market Cap', prop: 'market_cap' }, { name: 'Market Cap Change', prop: 'market_cap_change' },
    { name: 'Volume', prop: 'volume' }, { prop: 'volume_change', name: 'Volume Change' },
  ];
  config: any = {
    className: ['table-striped', 'table-bordered']
  };

  constructor(
    private cryptoCoinService: CryptocoinService,
  ) { }

  ngOnInit(): void {
    this.getRecords()
  }

  getRecords() {
    this.cryptoCoinService.list().subscribe((records: any) => {
      this.records = [...records]
      console.log('records', records)
    })
  }

}
