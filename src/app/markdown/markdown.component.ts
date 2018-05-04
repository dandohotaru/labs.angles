import "rxjs/add/observable/fromEvent";
import "rxjs/add/observable/fromEventPattern";
import "rxjs/add/operator/map";
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/distinctUntilChanged";
import { Observable } from "rxjs/Observable";
import * as SimpleMDE from 'simplemde';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { ViewChild, ElementRef, InjectionToken, Inject, } from '@angular/core';

import { MarkdownToolbar } from "./markdown.toolbar";

@Component({
  selector: 'app-markdown',
  templateUrl: './markdown.component.html',
  styleUrls: ['./markdown.component.css']
})
export class MarkdownComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('placeholder')
  public placeholder: ElementRef;

  @Input()
  public type: string;

  @Input()
  public content: any;

  @Output()
  public contentChange = new EventEmitter<string>();

  @Output()
  public changed = new EventEmitter<{ mark: string, html: string, text: string }>();

  private editor: SimpleMDE;

  constructor(private toolbar: MarkdownToolbar) {
  }

  public ngOnInit() {
  }

  public ngAfterViewInit(): void {

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
    this.editor.value(this.content || "");

    Observable
      .fromEvent(this.editor.codemirror, 'change')
      .map((context: any, change: any) => {
        return context.getValue()
      })
      .debounceTime(750)
      .distinctUntilChanged()
      .subscribe((markup: string) => {
        this.contentChange.emit(markup);
        this.changed.emit({
          mark: this.mark(markup),
          html: this.html(markup),
          text: this.text(markup),
        });
      });
  }

  public ngOnDestroy(): void {
    this.editor = null
  }

  private mark(markup: string): string {
    return markup;
  }

  private html(markup: string): string {
    return this.editor.markdown(markup);
  }

  private text(markup: string): string {
    // based on npm module remove-markdown
    var output = markup
      // strip list leaders
      .replace(/^([\s\t]*)([\*\-\+]|\d\.)\s+/gm, '$1')
      // Remove HTML tags
      .replace(/<(.*?)>/g, '$1')
      // Remove setext-style headers
      .replace(/^[=\-]{2,}\s*$/g, '')
      // Remove footnotes?
      .replace(/\[\^.+?\](\: .*?$)?/g, '')
      .replace(/\s{0,2}\[.*?\]: .*?$/g, '')
      // Remove images
      .replace(/\!\[.*?\][\[\(].*?[\]\)]/g, '')
      // Remove inline links
      .replace(/\[(.*?)\][\[\(].*?[\]\)]/g, '$1')
      // Remove reference-style links?
      .replace(/^\s{1,2}\[(.*?)\]: (\S+)( ".*?")?\s*$/g, '')
      // Remove atx-style headers
      .replace(/^\#{1,6}\s*([^#]*)\s*(\#{1,6})?/gm, '$1')
      .replace(/([\*_]{1,2})(\S.*?\S)\1/g, '$2')
      .replace(/(`{3,})(.*?)\1/gm, '$2')
      .replace(/^-{3,}\s*$/g, '')
      .replace(/`(.+?)`/g, '$1')
      .replace(/\n{2,}/g, '\n\n');
    return output;
  }
}
