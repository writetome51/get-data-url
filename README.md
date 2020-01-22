# getDataURL(file: File): Promise&lt;string&gt;

An async function that returns a data URL generated from `file`.


## Example

```html
<!--  In the html, get a File from a file <input> and pass it to
    a function:  
-->
<p>Choose file to generate data url from:</p>
<input type="file"  (change)="addToURLs($event.target.files[0])"/>
```

```ts
// In a javascript component:

dataURLs = [];

async addToURLs(file) {
     let url = await getDataURL(file);
     this.dataURLs.push(url);
}
```

## Installation

```bash
npm i  @writetome51/get-data-url
```

## Loading
```ts
// If using TypeScript:
import {getDataURL} from '@writetome51/get-data-url';
// If using ES5 JavaScript:
var getDataURL = require('@writetome51/get-data-url').getDataURL;
```
