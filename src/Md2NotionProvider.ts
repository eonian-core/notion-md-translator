import {markdownToBlocks, markdownToRichText} from '@tryfabric/martian';
import type { BlocksOptions, RichTextOptions } from '@tryfabric/martian/build/src/parser/internal';


export class Md2NotionProvider {
  async toBlocks(markdown: string, options?: BlocksOptions) {
    return markdownToBlocks(markdown, options);
  }

  async toRichText(markdown: string, options?: RichTextOptions) {
    return markdownToRichText(markdown, options);
  }
}