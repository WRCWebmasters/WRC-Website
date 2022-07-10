//https://dev.to/codebucks/implement-silky-smooth-scrolling-in-react-js-46fn

import Scrollbar from "smooth-scrollbar";
import { useEffect } from "react";

const options = {
  damping: 0.07
};

const Scroll = () => {
  useEffect(() => {
    Scrollbar.init(document.body, options);

    return () => {
      if (Scrollbar) Scrollbar.destroy(document.body);
    };
  }, []);

  return null;
};

export default Scroll;
