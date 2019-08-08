import {Component, OnDestroy, OnInit} from '@angular/core';
import {GetDataService} from '../../services/get-data.service';
import {Subscription} from 'rxjs';
import {SeriesList} from '../../models/series-list';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit, OnDestroy {
  seriesListSub: Subscription;
  seriesListData: SeriesList[] = [];
  show = false;

  constructor(private getData: GetDataService) {
  }

  ngOnInit() {
    this.seriesListSub = this.getData.getSeriesList().subscribe((response) => {
      // @ts-ignore
      this.seriesListData = response.result.results;
    }, (error) => {
      console.log(error);
    });
  }

  ngOnDestroy() {
    if (this.seriesListSub) {
      this.seriesListSub.unsubscribe();
    }
  }

  elemOver(element: HTMLDivElement, isOver: boolean) {
    if (isOver) {
      element.classList.add('show');
    } else {
      element.classList.remove('show');
    }
  }

}
