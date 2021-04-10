import * as React from "react";
import { SvgXml } from "react-native-svg";

export default function Wave(){  
  const svgcode = 
  `
  <svg width="42" height="43" viewBox="0 0 42 43" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <path d="M0 42.94H42V0.94H0V42.94Z" fill="url(#pattern0)"/>
  <defs>
  <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
  <use xlink:href="#image0" transform="scale(0.015625)"/>
  </pattern>
  <image id="image0" width="64" height="64" xlink:href="data:image/png;base64,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"/>
  </defs>
  </svg>
  `

  const Svg = () => <SvgXml xml={svgcode} width="42px" height="42px" />;  

  return <Svg />;
}