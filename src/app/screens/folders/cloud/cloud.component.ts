import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {of, switchMap} from "rxjs";
import {DEFAULT_FOLDER, FAKE_FOLDERS, Folder} from "../../../../models/Folder";
import {AppService, DisplayMode} from "../../../services/app.service";

@Component({
  selector: 'app-cloud',
  templateUrl: './cloud.component.html',
  styles: []
})
export class CloudComponent implements OnInit {
  folder: Folder = DEFAULT_FOLDER
  currentFolder: Folder | null = null;
  isGridMode: boolean = true

  constructor(private route: ActivatedRoute, private appService: AppService) {
  }

  ngOnInit(): void {
    this.getCurrentDisplayMode()
    this.getRouteParam()
  }

  /**
   * Method to switch between display modes.
   * @param type
   */
  switchDisplayMode(type: 'l' | 'g') {
    if(type === 'l') {
      this.appService.display_mode = DisplayMode.LIST
      return;
    }

    if(type === 'g')
      this.appService.display_mode = DisplayMode.GRID
  }

  /**
   * Method to get route param
   */
  getRouteParam(){
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        return of([params])
      })
    ).subscribe({
      next: (data) => {
        const folder_id = data[0].get('folder_id')
        this.folder = FAKE_FOLDERS.find(item => item.id === folder_id) || DEFAULT_FOLDER
      },
      error: err => {
        console.log(err)
      }
    })
  }

  /**
   * Method to get current display mode.
   */
  getCurrentDisplayMode(){
    this.appService.display_mode$.subscribe((value) => {
      this.isGridMode = value === DisplayMode.GRID
    })
  }
}
