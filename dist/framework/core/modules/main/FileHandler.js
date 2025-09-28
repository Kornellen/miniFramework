import fs from "fs";
/**
 * Contains File Handling logic
 */
export class FileHandler {
    static getFile(filePath) {
        if (!filePath)
            return undefined;
        return fs.readFileSync(filePath, "utf8");
    }
}
//# sourceMappingURL=FileHandler.js.map