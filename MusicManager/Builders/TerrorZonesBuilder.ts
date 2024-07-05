import { FileConstants } from "../Constants/FileConstants";
import { SettingsConstants } from "../Constants/SettingsConstants";
import { Sound } from "../Models/Sound";
import { BaseMusicBuilder } from "./BaseMusicBuilder";
import { IMusicBuilder } from "./Interfaces/IMusicBuilder";

export class TerrorZonesBuilder extends BaseMusicBuilder implements IMusicBuilder {
  protected readonly pathCustom = `/assets/Terror Zones/music_desecrated/${FileConstants.extensionFlac}`;
  protected readonly pathSoundenvironTxt = `global/excel/soundenviron${FileConstants.extensionTxt}`;
  protected readonly tzMusicHandle = "ESOUNDENVIRON_INHERIT_DESECRATED";

  protected readonly soundName = `music_desecrated`;
  protected readonly fileCustomPath = `common\\`;
  protected readonly fileCustomName = `desecrated_custom`;

  constructor() {
    super();
  }

  public build(): void {
    if (config.TerrorZonesMusic as string !== SettingsConstants.disabled)
      return;
    else if (config.TerrorZonesMusic as string === SettingsConstants.remove)
      this.removeMusic();
    else if (config.TerrorZonesMusic as string === SettingsConstants.custom)
      this.setCustomMusic();
  }

  /**
   * Modifies soundenviron.txt to remove the entry for terror zone music.
   */
  protected removeMusic(): void {
    let file = D2RMM.readTsv(this.pathSoundenvironTxt);

    let index: number = file.rows.findIndex(row => row["Handle"] == this.tzMusicHandle);
    file.rows.splice(index, 1);

    D2RMM.writeTsv(this.pathSoundenvironTxt, file);
  }

  /**
   * Adds new files \global\music\common\desecrated_custom.flac and \hd\global\music\common\desecrated_custom_hd.flac
   * and modifies the sounds.txt entries music_desecrated and music_desecrated_hd to use them.
   */
  protected setCustomMusic(): void {
    let custom = new Sound(this.soundName, this.fileCustomPath, this.fileCustomName, FileConstants.extensionFlac);
    this.modifySound(custom);
  }
}
