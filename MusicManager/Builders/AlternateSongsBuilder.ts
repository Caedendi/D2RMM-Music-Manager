import { FileConstants } from "../Constants/FileConstants";
import { SettingsConstants } from "../Constants/SettingsConstants";
import { Sound } from "../Models/Sound";
import { BaseMusicBuilder } from "./BaseMusicBuilder";
import { IMusicBuilder } from "./Interfaces/IMusicBuilder";

/**
 * TODO
 */
export class AlternateSongsBuilder extends BaseMusicBuilder implements IMusicBuilder {
  // protected readonly pathSwitcheroo = `/assets/Alternate Songs/Crypt-Tomb Switcheroo/`;
  protected readonly pathTheDesert = `/assets/Alternate Songs/The Desert/`;
  protected readonly pathTheMonastery = `/assets/Alternate Songs/The Monastery/`;

  protected readonly pathAct1 = `act1\\`;
  protected readonly fileNameCrypt = "crypt";
  protected readonly soundNameCrypt = `music_crypt`;

  protected readonly pathAct2 = `act2\\`;
  protected readonly fileNameTombs = "tombs";
  protected readonly soundNameTombs = `music_tombs`;

  constructor() {
    super();
  }

  public build(): void {
    if (config.IsAlternateSongsCryptTombsSwitcherooEnabled as boolean)
      this.applyCryptTombSwitcheroo();
    if (!(config.AlternateSongsTheDesert as string === SettingsConstants.disabled))
      this.applyTheDesert();
    if (!(config.AlternateSongsTheMonastery as string === SettingsConstants.disabled))
      this.applyCryptTombSwitcheroo();
  }

  protected applyCryptTombSwitcheroo(): void {
    // this.copyAssets(this.pathSwitcheroo);

    let newCrypt = new Sound(this.soundNameCrypt, this.pathAct2, this.fileNameTombs, FileConstants.extensionFlac, false);
    let newTombs = new Sound(this.soundNameTombs, this.pathAct1, this.fileNameCrypt, FileConstants.extensionFlac, false);

    this.modifySound(newCrypt);
    this.modifySound(newTombs);
  }

  // TODO: add new asset instead of replace, and change sound entry to new asset
  protected applyTheDesert(): void {
    this.copyAssets(`${this.pathTheDesert}${config.AlternateSongsTheDesert as string}/`);
  }

  protected applyTheMonastery(): void {
    this.copyAssets(`${this.pathTheMonastery}${config.AlternateSongsTheMonastery as string}/`);
  }
}
