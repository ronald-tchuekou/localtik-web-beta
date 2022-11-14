import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {of, switchMap} from "rxjs";
import {DEFAULT_FOLDER, FAKE_FOLDERS, Folder} from "../../../../models/Folder";

@Component({
  selector: 'app-cloud',
  templateUrl: './cloud.component.html',
  styles: []
})
export class CloudComponent implements OnInit {
  display_mode: String = 'grid'
  folder: Folder = DEFAULT_FOLDER
  currentFolder: Folder | null = null;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
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

}
