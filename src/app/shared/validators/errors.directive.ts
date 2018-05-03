
import { Directive, OnInit, Input } from '@angular/core';
import { ElementRef, Inject, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { FormGroup } from '@angular/forms';

@Directive({ selector: '[apperrors]' })
export class ErrorsDirective implements OnInit {

  @Inject(DOCUMENT)
  private document;

  @Input()
  public form : FormGroup;

  constructor(private reference: ElementRef, private renderer: Renderer2) {
  }

  public ngOnInit(): void {
    let cotrols = Object.keys(this.form.controls);

    const child = document.createElement('div');
    child.style.backgroundColor = 'yellow';
    child.innerText = `Work in progress: ${cotrols.join(", ")}`;
    
    this.renderer.appendChild(this.reference.nativeElement, child);
  }
}