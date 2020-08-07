# getDataURL(file: Blob): Promise&lt;string&gt;

An async function that returns a data URL generated from `file`.


## Example
Demonstrates usage in an Angular project:

```html
<!--  
// example.component.html
Get a File from a file <input> and pass it to a component method:  
-->
<p>Choose file to generate data url from:</p>
<input type="file"  (change)="addToURLs($event.target.files[0])"/>
```

```ts
// example.component.ts:

export class ExampleComponent {
    dataURLs = [];

    async addToURLs(file) {
        let url = await getDataURL(file); // extracts url
        this.dataURLs.push(url);
    }
}
```

## Installation
```bash
npm i  @writetome51/get-data-url
```

## Loading
```js
import {getDataURL} from '@writetome51/get-data-url';
```
