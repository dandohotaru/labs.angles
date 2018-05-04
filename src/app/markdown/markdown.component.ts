import { Component, Input, Output, EventEmitter } from '@angular/core';
import { OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { ViewChild, ElementRef, InjectionToken, Inject, } from '@angular/core';
import * as SimpleMDE from 'simplemde';

@Component({
  selector: 'app-markdown',
  templateUrl: './markdown.component.html',
  styleUrls: ['./markdown.component.css']
})
export class MarkdownComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('placeholder')
  public placeholder: ElementRef;

  @Input()
  public model: any;

  @Output()
  public modelChange = new EventEmitter<string>();

  private editor: SimpleMDE;

  constructor() {

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
    };
    this.editor = new SimpleMDE(config);
    this.editor.value(this.model || "")

    this.editor.codemirror.on('change', (context, change) => {
      const value = context.getValue();
      this.modelChange.emit(value);
    });
  }

  public ngOnDestroy(): void {
    this.editor = null
  }

  private mark(): string {
    var content = this.editor.value();
    return content;
  }

  private html(): string {
    var content = this.editor.value();
    return this.editor.markdown(content);
  }

  private text(): string {
    var content = this.editor.value();
    // based on npm module remove-markdown 0.0.6
    var output = content
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
