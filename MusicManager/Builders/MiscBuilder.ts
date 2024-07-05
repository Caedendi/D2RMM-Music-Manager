import { FileConstants } from "../Constants/FileConstants";
import { SettingsConstants } from "../Constants/SettingsConstants";
import { Sound } from "../Models/Sound";
import { BaseMusicBuilder } from "./BaseMusicBuilder";
import { IMusicBuilder } from "./Interfaces/IMusicBuilder";

export class MiscBuilder extends BaseMusicBuilder implements IMusicBuilder {
  protected readonly pathAct1 = `act1\\`;

  protected readonly soundNameRogueEncampment = `music_town_1`;
  protected readonly fileNameRogueEncampment  = "town1";
  
  protected readonly soundNameTristram = `music_tristram`;
  protected readonly fileNameTristram  = "tristram";

  constructor() {
    super();
  }

  public build(): void {
    if (!(config.CertifiedHoodClassic as string !== SettingsConstants.disabled))
      this.applyCertifiedHoodClassic();
  }

  /**
   * Adds new files \global\music\common\desecrated_custom.flac and \hd\global\music\common\desecrated_custom_hd.flac
   * and modifies the sounds.txt entries music_desecrated and music_desecrated_hd to use them.
   */
  protected applyCertifiedHoodClassic(): void {
    let newRogueEncampment = new Sound(this.soundNameRogueEncampment, this.pathAct1, this.fileNameTristram, FileConstants.extensionFlac);
    this.modifySound(newRogueEncampment);

    if (config.CertifiedHoodClassic as string === "switch") {
      let newTristram = new Sound(this.soundNameTristram, this.pathAct1, this.fileNameRogueEncampment, FileConstants.extensionFlac);
      this.modifySound(newTristram);
    }
  }
}
