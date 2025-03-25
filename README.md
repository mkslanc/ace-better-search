# Ace Better Search Extension

Enhance your Ace Editor with the **Ace Better Search Extension**—an advanced tool that brings improved search functionality and a seamless user experience to your development environment.

## Features

- **Multiline Search Support**  
  Perform searches across multiple lines effortlessly, enabling you to work with complex search patterns and large blocks of text.

- **Highlighted Regex in Search Input**  
  Get immediate visual feedback with highlighted regular expressions in the search input box, making the creation and debugging of regex patterns much easier.

- **Fixed Regex Lookahead**  
  Benefit from accurate handling of advanced regex patterns thanks to fixed regex lookahead operations.

- **WebWorker for Non-blocking UI**  
  Experience a responsive interface even during extensive search operations as the search functionality runs within a WebWorker, preventing UI freezes.

- **Search Query History**  
  Quickly access your previous search queries through an integrated history feature for both find and replace inputs, streamlining repetitive tasks.

## Installation

Install the extension using npm:

```bash
npm install ace-better-search
```

## Usage

### Importing via NPM

After installing both `ace-better-search` and your preferred Ace Editor package, you can import the extension. Note that **ace-code** and **ace-builds** refer to essentially the same Ace Editor—**ace-builds** is the bundled version, while **ace-code** is the non-bundled variant. Use either based on your project needs.

```javascript
// If you prefer the non-bundled version:
import * as ace from 'ace-code';

// Or if you prefer the bundled version:
import * as ace from 'ace-builds';

import 'ace-better-search';

// Initialize your Ace editor
const editor = ace.edit("editor");
```

### Importing via CDN

For quick integration or testing, include the extension directly from a CDN by adding the following script tag to your HTML file:

```html
<script src="http://127.0.0.1:8080/extension.js" crossorigin="anonymous" type="module"></script>
```

> **Note:** Adjust the CDN URL based on your hosting provider or deployment setup.

## License

This project is licensed under the MIT License.