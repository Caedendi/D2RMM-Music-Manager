export class Sound {
  /**
   * The entry's SD value for Sound in sounds.txt
   */
  protected readonly name: string;

  /**
   * TODO
   */
  protected readonly filePath: string;

  /**
   * TODO
   */
  protected readonly fileName: string;

  /**
   * TODO
   */
  protected readonly fileExt: string;

  /**
   * TODO
   */
  protected readonly hasHdSuffixInFileName: boolean;

  /**
   * TODO
   */
  protected readonly hdSuffix: string = "_hd";

  /**
   * TODO
   * @param name The entry's value for the Sound column in sounds.txt.
   * @param filePath The SD path to the sound file.
   * @param fileName The name of the sound file.
   * @param fileExt The extension of the file.
   */
  constructor(name: string, filePath: string, fileName: string, fileExt: string, hasHdSuffixInFileName?: boolean) {
    this.name = name;
    this.filePath = filePath;
    this.fileName = fileName;
    this.fileExt = fileExt;
    this.hasHdSuffixInFileName = hasHdSuffixInFileName ?? true;
  }

  /**
   * Returns the value for the Sound column in sounds.txt for the SD entry
   * @returns 
   */
  public getNameSd(): string {
    return `${this.name}`;
  }

  /**
   * Returns the value for the Sound column in sounds.txt for the HD entry
   * @returns 
   */
  public getNameHd(): string {
    return `${this.name}${this.hdSuffix}`;
  }

  /**
   * Returns the relative path to the SD sound file.
   * @returns 
   */
  public getPathSd(): string {
    return `${this.filePath}${this.fileName}${this.fileExt}`;
  }

  /**
   * Returns the relative path to the HD sound file.
   * @returns 
   */
  public getPathHd(): string {
    return `${this.filePath}${this.fileName}${this.hasHdSuffixInFileName ? this.hdSuffix : ""}${this.fileExt}`;
  }
}
