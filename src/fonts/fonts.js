import localFont from "next/font/local";

export const heliosAntique = localFont({
  // src: "./helios.otf",
  // variable: "--font-helios",
  // display: "swap",
  src: [
    {
      path: "./helios.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./heliosBold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-helios",
  display: "swap",
});
