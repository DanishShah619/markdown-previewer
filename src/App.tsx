import { useState } from 'react'
///import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import { marked } from 'marked'
const defaultMarkdown = `# Welcome to my Markdown Previewer!
## This is a subheading (H2)
[Visit freeCodeCamp](https://www.freecodecamp.org)

Inline code: \`console.log("Hello, world!");\`

\`\`\`
// This is a code block
function greet() {
  return "Hello, world!";
}
\`\`\`

- List item 1
- List item 2

> This is a blockquote.

![Placeholder Image](https://via.placeholder.com/150)

**This is bold text**
`;
function App() {
  //const [count, setCount] = useState(0)
  const [text, setText] = useState(defaultMarkdown);

  return (
    <>
      <div className="container">
      <textarea
        id="editor"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div
        id="preview"
        dangerouslySetInnerHTML={{ __html: marked(text, { breaks: true }) }}
      />
    </div>

  </>
  )
}

export default App
