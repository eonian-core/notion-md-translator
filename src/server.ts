import * as express from 'express'
import * as fs from 'node:fs'
import * as showdown from 'showdown'

// set up express web server
const app = express()
// set up static content
app.use(express.static('public'))


const md = new showdown.Converter()
// Main page
app.get('/', async(_request, response) => {
  const readme = fs.readFileSync('README.md', 'utf-8')

  console.log(`Received request. Sending readme content.`)

  // render HTML response
  try {
    response.set('Content-Type', 'text/html')

    const content = fs.readFileSync('views/index.tmpl', 'utf-8')
      .replace('@@MAIN@@', md.makeHtml(readme.toString()))
    response.send(content)
  } catch (error) {
    response.send()
  }
})

// Start web server on port 3000
app.listen(3000, () => {
  console.log('Server is listening on port 3000')
})
