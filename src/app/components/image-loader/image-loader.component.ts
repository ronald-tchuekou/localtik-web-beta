import {AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';

@Component({
  selector: 'app-image-loader',
  templateUrl: './image-loader.component.html',
  styles: []
})
export class ImageLoaderComponent implements OnInit, AfterViewInit, OnChanges {
  @Input() image_url = '/assets/images/logo.png'
  @ViewChild('image') image: any

  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    const imageElement = this.image.nativeElement
    imageElement.setAttribute('href', this.image_url)
  }

  ngOnChanges(changes: SimpleChanges) {
    const change = changes['image_url']
    if (change && this.image) {
      const imageElement = this.image.nativeElement
      imageElement.setAttribute('href', change.currentValue)
    }
  }

}
