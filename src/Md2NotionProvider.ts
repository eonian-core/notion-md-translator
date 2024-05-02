import { markdownToBlocks, markdownToRichText } from '@tryfabric/martian';
import type { BlocksOptions, RichTextOptions } from '@tryfabric/martian/build/src/parser/internal';


export class Md2NotionProvider {
  /**
   * Parses Markdown content into Notion Blocks.
   *
   * @param body Any Markdown or GFM content
   * @param options Any additional option
   */
  async toBlocks(markdown: string, options?: BlocksOptions) {
    return markdownToBlocks(markdown, options);
  }

  /**
   * Parses Markdown content into Notion Blocks.
   *
   * @param body Any Markdown or GFM content
   * @param options Any additional option
   */
  async toRichText(markdown: string, options?: RichTextOptions) {
    return markdownToRichText(markdown, options);
  }
}