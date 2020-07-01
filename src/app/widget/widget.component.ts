import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class WidgetComponent implements OnInit {
  @Input() tutorial;
  _data;
  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.tutorial.subscribe(data => {
      this._data = data;
      console.log(data);
      console.log(this._data);
      // this.cd.markForCheck();
    });
     //this.cd.detach();
  }

}
