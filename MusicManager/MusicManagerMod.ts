import { AlternateSongsBuilder } from "./Builders/AlternateSongsBuilder";
import { FileConstants } from "./Constants/FileConstants";
import { TerrorZoneBuilder } from "./Builders/TerrorZoneBuilder";

export class MusicManagerMod {
  protected readonly alternateSongsBuilder = new AlternateSongsBuilder();
  protected readonly terrorZoneBuilder     = new TerrorZoneBuilder();

  public build(): void {
    this.alternateSongsBuilder.build();
    this.terrorZoneBuilder.build();
  }
}
