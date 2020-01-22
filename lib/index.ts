/**************************
 Returns base64 data url extracted from file.
 Usage Example:

 async set_dataURL(file){
     let url = await getDataURL(file);
     this.dataURLs.push(url);
 }
 ************************/


export async function getDataURL(file: File): Promise<string> {

	return new Promise((returnData) => {

		const reader = new FileReader();

		reader.onload = () => {
			// @ts-ignore
			returnData(reader.result);
		};

		reader.readAsDataURL(file);
	});
}
