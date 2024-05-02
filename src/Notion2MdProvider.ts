import { Client } from "@notionhq/client";
import { NotionToMarkdown } from 'notion-to-md'
import type { ListBlockChildrenResponseResults, MdBlock, MdStringObject } from "notion-to-md/build/types";

export class Notion2MdProvider {
    private readonly notion: Client
    private readonly n2m: NotionToMarkdown

    constructor() {
        this.notion = new Client({})
        this.n2m = new NotionToMarkdown({
            notionClient: this.notion
        })
    }

    /**
     * Converts list of Notion Blocks to Markdown string
     * @param {ListBlockChildrenResponseResults | undefined} blocks - List of notion blocks
     * @param {number} totalPage - Retrieve block children request number, page_size Maximum = totalPage * 100
     * @param {MdBlock[]} mdBlocks - Defines max depth of nesting
     * @param {number} nestingLevel - Defines max depth of nesting
     * @returns {MdStringObject} - Returns markdown string with child pages separated
     */
    async toMd(blocks?: ListBlockChildrenResponseResults, totalPage?: number | null, mdBlocks?: MdBlock[], pageIdentifier?: string, nestingLevel?: number): Promise<MdStringObject> {
        const result = await this.toMdBlocks(blocks, totalPage, mdBlocks)
        return this.mdBlocksToString(result, pageIdentifier, nestingLevel)
    }

    /**
     * Converts list of Notion Blocks to Markdown Blocks
     * @param {ListBlockChildrenResponseResults | undefined} blocks - List of notion blocks
     * @param {number} totalPage - Retrieve block children request number, page_size Maximum = totalPage * 100
     * @param {MdBlock[]} mdBlocks - Defines max depth of nesting
     * @returns {Promise<MdBlock[]>} - Array of markdown blocks with their children
     */
    async toMdBlocks(blocks?: ListBlockChildrenResponseResults, totalPage?: number | null, mdBlocks?: MdBlock[]): Promise<MdBlock[]> {
        return await this.n2m.blocksToMarkdown(blocks, totalPage, mdBlocks)
    }

    /**
     * Converts Markdown Blocks to string
     * @param {MdBlock[]} mdBlocks - Array of markdown blocks
     * @param {number} nestingLevel - Defines max depth of nesting
     * @returns {MdStringObject} - Returns markdown string with child pages separated
     */
    mdBlocksToString(mdBlocks?: MdBlock[], pageIdentifier?: string, nestingLevel?: number): MdStringObject {
        return this.n2m.toMarkdownString(mdBlocks, pageIdentifier, nestingLevel)
    }
}