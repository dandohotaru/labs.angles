import * as SimpleMDE from 'simplemde';
import { Observable, fromEvent, fromEventPattern } from "rxjs";
import { map, debounceTime, distinctUntilChanged } from "rxjs/operators";
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';

import { MarkdownToolbar } from "./markdown.toolbar";

@Component({
  selector: 'app-markdown',
  templateUrl: './markdown.component.html'
})
export class MarkdownComponent implements OnInit, AfterViewInit, OnDestroy {

  private editor: SimpleMDE;

  @ViewChild('placeholder')
  public placeholder: ElementRef;

  @Input()
  public type: string;

  @Input()
  public value: string;

  @Output()
  public changed = new EventEmitter<string>();

  constructor(private toolbar: MarkdownToolbar) {
  }

  public ngOnInit() {
  }

  public ngAfterViewInit(): void {

    // ToDo: Make options injectable
    let config = {
      element: this.placeholder.nativeElement,
      autoDownloadFontAwesome: false,
      spellChecker: false,
      forceSync: true,
      status: false,
      autofocus: true,
      tabSize: 4,
      showIcons: this.toolbar.shown(this.type),
      hideIcons: this.toolbar.hidden(this.type),
    };
    this.editor = new SimpleMDE(config);
    this.editor.value(this.value || "");

    fromEvent(this.editor.codemirror, 'change')
      .pipe(
        map((context: any) => {
          return context[0].getValue()
        }),
        debounceTime(750),
        distinctUntilChanged())
      .subscribe((markup: string) => {
        this.changed.emit(markup);
      });
  }

  public ngOnDestroy(): void {
    this.editor = null
  }
}