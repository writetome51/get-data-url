"use strict";
/**************************
 Returns base64 data url extracted from file.
 Usage Example:

 async set_dataURL(file){
     let url = await getDataURL(file);
     this.dataURLs.push(url);
 }
 ************************/
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
function getDataURL(file) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((returnData) => {
            const reader = new FileReader();
            reader.onload = () => {
                // @ts-ignore
                returnData(reader.result);
            };
            reader.readAsDataURL(file);
        });
    });
}
exports.getDataURL = getDataURL;
