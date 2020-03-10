"use strict";
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
const file_reader_service_1 = require("@writetome51/file-reader-service");
/**************************
 Returns base64 data url extracted from file.
 Usage Example:

 async addTo_dataURLs(file) {
     let url = await getDataURL(file);
     this.dataURLs.push(url);
 }
 ************************/
function getDataURL(file) {
    return __awaiter(this, void 0, void 0, function* () {
        class DataURLFileReaderService extends file_reader_service_1.FileReaderService {
            constructor() {
                super('readAsDataURL');
            }
        }
        return (new DataURLFileReaderService()).getContents(file);
    });
}
exports.getDataURL = getDataURL;
