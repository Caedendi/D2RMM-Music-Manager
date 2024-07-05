import { TSVData } from "../../../types";
import { FileConstants } from "../Constants/FileConstants";
import { Sound } from "../Models/Sound";
import { IMusicBuilder } from "./Interfaces/IMusicBuilder";

export abstract class BaseMusicBuilder implements IMusicBuilder {
  protected readonly pathSoundsTxt = `global\\excel\\sounds${FileConstants.extensionTxt}`;
  protected readonly soundName = `music_desecrated`;

  public abstract build(): void;
  
  /**
   * Takes a path to a local folder with an hd and global folder structure containing music file assets to replace.
   * @param assetsPath The path to the local folder containing hd and global folders with assets to copy.
   */
  protected copyAssets(assetsPath: string): void {
    // local folder, target folder, overwrite conflicts
    D2RMM.copyFile(`${assetsPath}${FileConstants.hd}`,     `${FileConstants.hd}`,     true);
    D2RMM.copyFile(`${assetsPath}${FileConstants.global}`, `${FileConstants.global}`, true);
  }

  /**
   * Modifies an entry in sounds.txt to have the new values set in the provided sound.
   * @param sound The sound containing the information to be modified.
   */
  protected modifySound(sound: Sound): void {
    let file = D2RMM.readTsv(this.pathSoundsTxt);

    this.modifySoundEntry(file, sound.getNameSd(), sound.getPathSd());
    this.modifySoundEntry(file, sound.getNameHd(), sound.getPathHd());

    D2RMM.writeTsv(this.pathSoundsTxt, file);
  }

  private modifySoundEntry(file: TSVData, soundName: string, fileName: string): void {
    let row = file.rows.find(row => row["Sound"] === soundName);
    row["FileName"] = fileName;
  }
}
