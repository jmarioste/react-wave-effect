import { CSSProperties, useEffect } from "react";
import { renderToStaticMarkup } from "react-dom/server";
// Step 1. Define the props. you can add other css properties according to your perferences, like zIndex
type Props = {
  color: CSSProperties["color"];
  animationDuration: CSSProperties["animationDuration"];
  animationDirection?: CSSProperties["animationDirection"];
  opacity: CSSProperties["opacity"];
};
const AnimatedWave: React.FC<Props> = ({ color, ...props }) => {
  //  Step 2. create a svg wave, i created this using figma
  const wave = (
    <svg viewBox="0 0 1000 126" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0 42.9533C178.148 -12.5894 287.4 -13.7474 500 42.9533C682.727 88.1203 798.763 97.7368 1000 42.9533V125.861H0V42.9533Z"
        fill={color}
      />
    </svg>
  );

  // Step 3. render svg to string
  const svgAsString = renderToStaticMarkup(wave);
  // Step 4. encode string to url so that we can use it in the background property
  const encodedWaveSvg = encodeURIComponent(svgAsString);

  return (
    <div
      style={{
        // Step 5. use encodedsvg as background
        background: `url('data:image/svg+xml;utf8,${encodedWaveSvg}')`,
        position: "absolute",
        bottom: 0,
        width: "100%",
        // Step 6. height and background size should match the svg viewBox for a smooth animation
        height: 126,
        backgroundSize: "1000px 126px",
        // animation-name is wave, we'll create this in the next step
        animation: `wave ${props.animationDuration} linear infinite`,
        animationDirection: props.animationDirection,
        opacity: props.opacity,
      }}
    ></div>
  );
};
export default AnimatedWave;
