export class MarkdownToolbar {

  private icons: { class: string, tags: string[] }[];

  constructor() {
    this.icons = [
      { class: "bold", tags: ["complete", "default", "minimal"] },
      { class: "italic", tags: ["complete", "default", "minimal"] },
      { class: "strikethrough", tags: ["complete", "default", "minimal"] },
      { class: "heading", tags: ["complete", "default"] },
      { class: "heading-smcompleteer", tags: ["complete", "default"] },
      { class: "heading-bigger", tags: ["complete", "default"] },
      { class: "heading-1", tags: ["complete"] },
      { class: "heading-2", tags: ["complete"] },
      { class: "heading-3", tags: ["complete"] },
      { class: "code", tags: ["complete"] },
      { class: "quote", tags: ["complete", "default"] },
      { class: "unordered-list", tags: ["complete", "default", "minimal"] },
      { class: "ordered-list", tags: ["complete", "default", "minimal"] },
      { class: "clean-block", tags: ["complete"] },
      { class: "link", tags: ["complete", "default", "minimal"] },
      { class: "image", tags: ["complete"] },
      { class: "table", tags: ["complete", "default"] },
      { class: "horizontal-rule", tags: ["complete", "default"] },
      { class: "preview", tags: ["complete", "default", "minimal"] },
      { class: "side-by-side", tags: ["complete", "default"] },
      { class: "fullscreen", tags: ["complete", "default"] },
      { class: "guide", tags: ["complete", "default"] },
    ];
  }

  public shown(type: string | "complete" | "default" | "minimal" = "minimal"): string[] {
    switch (type) {
      case "complete":
        return this.icons.map(icon => icon.class);
      case "default":
        return this.icons
          .filter(icon => icon.tags.some(tag => tag == "default"))
          .map(icon => icon.class);
      case "minimal":
        return this.icons
          .filter(icon => icon.tags.some(tag => tag == "minimal"))
          .map(icon => icon.class);
    }
  }

  public hidden(type: string | "complete" | "default" | "minimal" = "minimal"): string[] {
    switch (type) {
      case "complete":
        return [];
      case "default":
        return this.icons
          .filter(icon => icon.tags.every(tag => tag != "default"))
          .map(icon => icon.class);
      case "minimal":
        return this.icons
          .filter(icon => icon.tags.every(tag => tag != "minimal"))
          .map(icon => icon.class);
    }
  }
}