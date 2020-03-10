import { FileReaderService } from '@writetome51/file-reader-service';


/**************************
 Returns base64 data url extracted from file.
 Usage Example:

 async addTo_dataURLs(file) {
     let url = await getDataURL(file);
     this.dataURLs.push(url);
 }
 ************************/


export async function getDataURL(file: Blob): Promise<string> {

	class DataURLFileReaderService extends FileReaderService {
		constructor() {
			super('readAsDataURL');
		}
	}

	return (new DataURLFileReaderService()).getContents(file);
}
