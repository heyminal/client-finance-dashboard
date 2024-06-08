// eslint-disable-next-line
// import { Palette, PaletteColor } from "@mui/material/styles/createPalette";
// declare module "@mui/material/styles/createPalette"{
//     interface PaletteColor{
//         [key:number] : string;
//     }
//     interface Palette{
//         tertiary : PaletteColor;
//     }
// }
import { PaletteColor } from "@mui/material/styles/createPalette";

declare module "@mui/material/styles" {
  interface Palette {
    tertiary: PaletteColor;
  }
  interface PaletteOptions {
    tertiary: PaletteColorOptions;
  }
}

declare module "@mui/material/styles/createPalette" {
  interface PaletteColor {
    [key: number]: string;
  }
}

interface PaletteColorOptions {
  main?: string;
  [key: number]: string;
}
