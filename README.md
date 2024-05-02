# Notion-MD Translator

Lambda-based API to convert Notion API Blocks and RichText to markdown and back

## API Documentation

### `GET /`

Main page. Sends the readme content as an HTML response.

---

### `POST /api/md/to-notion-blocks`

Parses Markdown content into Notion Blocks.

**Request Body:**

- `markdown`: (string) Any Markdown or GFM content
- `options`: (object) Any additional option

**Response:**  
Returns a JSON object of Notion Blocks.

---

### `POST /api/md/to-notion-rich-text`

Parses Markdown content into Notion Rich Text.

**Request Body:**

- `markdown`: (string) Any Markdown or GFM content
- `options`: (object) Any additional option

**Response:**  
Returns a JSON object of Notion Rich Text.

---

### `POST /api/notion/to-md`

Converts list of Notion Blocks to Markdown string.

**Request Body:**

- `blocks`: (array) List of notion blocks
- `totalPage`: (number) Retrieve block children request number, page_size Maximum = totalPage * 100
- `mdBlocks`: (array) Defines max depth of nesting
- `pageIdentifier`: (string) Identifier for the page
- `nestingLevel`: (number) Defines max depth of nesting

**Response:**  
Returns a JSON object containing a markdown string with child pages separated.

## Test API

You can test the API using the following curl commands:

```bash
# api/md/to-notion-blocks
curl -X POST -H "Content-Type: application/json" -d "$(cat ./src/tests/md.test.json)" http://localhost:3000/api/md/to-notion-blocks

# md/to-notion-rich-text
curl -X POST -H "Content-Type: application/json" -d "$(cat ./src/tests/md.test.json)" http://localhost:3000/api/md/to-notion-rich-text

# notion/to-md
curl -X POST -H "Content-Type: application/json" -d "$(cat ./src/tests/notion.test.json)" http://localhost:3000/api/notion/to-md

```

## Getting Started

Clone repo

```bash
git clone https://github.com/eonian-core/notion-md-translator.git
```

Install dependencies

```bash
  cd notion-md-translator
  yarn
```

## Development

Build and start server

```bash
  yarn dev
```

### Commands

- `build` - Build project
- `start` - Start server

### Running Tests

To run tests, run the following command

```bash
  # Unit tests on mocks
  yarn test
  # E2E tests with real requests
  yarn test:e2e
```

### Deployment

To deploy, you need [install flyctl](https://fly.io/docs/hands-on/install-flyctl/) and login using `fly auth login`

To deploy this project run

```bash
  yarn deploy
```

#### Next steps

- Run `fly status` - show the status of the application instances.
- Run `fly apps open` - open your browser and direct it to your app.

## Made by Eonian

[Eonian](https://www.github.com/octokatherine) internal project. We trying to be as transparent as possible with our users, as part of this practice we publishing this project.
You can also use it for own development. Any contributions and suggestions are welcome!

## Contributing

Contributions are always welcome!

Create new issues or contact us in [Discord](https://discord.gg/8mcUPPYJmj) for any questions!
