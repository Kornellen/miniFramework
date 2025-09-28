import fs from "fs";

/**
 * Contains File Handling logic
 */

export class FileHandler {
  public static getFile(filePath: string | undefined): string | undefined {
    if (!filePath) return undefined;
    return fs.readFileSync(filePath, "utf8");
  }
}
