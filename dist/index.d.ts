/**************************
 Returns base64 data url extracted from file.
 Usage Example:

 async addTo_dataURLs(file) {
     let url = await getDataURL(file);
     this.dataURLs.push(url);
 }
 ************************/

export declare function getDataURL(file: Blob): Promise<string>;
