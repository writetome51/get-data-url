/**************************
 Returns base64 data url extracted from file.
 Usage Example:

 async set_dataURL(file){
     let url = await getDataURL(file);
     this.dataURLs.push(url);
 }
 ************************/
export declare function getDataURL(file: File): Promise<string>;
