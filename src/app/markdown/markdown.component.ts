import { Component, OnInit, AfterViewInit, OnDestroy, ViewChild, ElementRef, InjectionToken, Inject } from '@angular/core';
import * as SimpleMDE from 'simplemde';

@Component({
  selector: 'app-markdown',
  templateUrl: './markdown.component.html',
  styleUrls:['./markdown.component.css']
})
export class MarkdownComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('simplemde') 
  public textarea: ElementRef;

  private simplemde: SimpleMDE;

  constructor() {
    
   }

  public ngOnInit() {
  }

  public ngAfterViewInit(): void {
    let config = {
      element : this.textarea.nativeElement,
      autoDownloadFontAwesome: false,
      spellChecker:false,
    };
    this.simplemde = new SimpleMDE(config);

  //   this.ngZone.runOutsideAngular(() => {
  //     // code which configures and creates SimpleMDE
  // });
  }

  public ngOnDestroy(): void {
    this.simplemde = null
  }

}
