import { useState } from "react";

const Checkbox = ({ label }) => {
  const [isChecked, setIsChecked] = useState(true);

  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="flex relative z-50 items-center space-x-2">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => handleChange()}
        className="border rounded-[4px] size-5 checked:border-primary checked:bg-primary"
      />
      {isChecked && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          fill="none"
          viewBox="0 0 16 16"
          onClick={() => handleChange()}
          className="absolute size-[15px] -left-[5px] fill-text"
        >
          <path fill="url(#a)" d="M0 0H16V16H0z"></path>
          <defs>
            <pattern
              id="a"
              width="1"
              height="1"
              patternContentUnits="objectBoundingBox"
            >
              <use transform="scale(.01)" xlinkHref="#b"></use>
            </pattern>
            <image
              id="b"
              width="100"
              height="100"
              xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB7UlEQVR4nO3bsU4UQQCH8U1EYwlKDA0hNiBP4AP4ND6EhfFdbChIpKAwRisriuktqDShorMx5jOTHPFMDly4Pe6/s9+vv5nZ+3I7d3u7XSdJkiRJkiRJkiRJWhFgF3gFHK5qDvUAPAGO+dcZ8KLP6zUgYBsoLHYBPB1yPt09xpV3N42h+41RfRxqTi0fozq5bhzdf4zq9RDzapgYX4GHi8bSkoCt2VfZvmq47WXn1QLGCGKMIMYIYowgxghijCDGCGKMIMYIgr/Ac2CMHBgjB8bIgTFyYIwcGCMHxsiBMXJgjBy0EgN4PLtp+EE3nbtDStwtn8AOcAT8mi3yEngLbHQjQiMxNoFv1yz4A/CoGwFaiFEBb/6z8NN6KuuC0cqeUQGfehxAbBRailEBn3seyEna6YtWTlPzZps3Y4tCizHmHsk6H1MUWo1xBdgHvt/iANe2p9DanjHmKEwlxhiiMLUYyVGYaozEKEw9RlIUjJETBWPkRMEYOVEwRk4UjJETBWPkRMEYOVEwRk4UjJETBWNERdnxcsgKAQfAj1tE+dnsn0sj/qRM90LhSKMUY+REKcbIiVKMkROlGCMnSjFGTpRijJwoxRhrADwHvsyF+A28r49DrGM9+htmD3gJPPNNkSRJkiRJkiRJktRN0h/8eIjWbE/xOgAAAABJRU5ErkJggg=="
            ></image>
          </defs>
        </svg>
      )}

      <p className="text-sm">{label}</p>
    </div>
  );
};

export default Checkbox;
