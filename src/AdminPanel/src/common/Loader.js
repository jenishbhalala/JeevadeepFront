import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const loadingStyle = {
  opacity: 1,
  zIndex: 999999,
};
const noneStyle = {
  opacity: 0,
  zIndex: -9,
};

const Loader = (props) => {
  const [hidden, setHidden] = useState(0);
  const [loading, setLoading] = useState(true);
  // const loading = useSelector((state) => state.loadingState.loading);
  // console.log("loading ===>", loading);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "./loader-script.js";
    // script.type = "text/jsx";
    script.async = true;

    document.body.appendChild(script);
  }, []);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 5000);
  //   // props.isVisable !== 100 ? setHidden(1) : setHidden(0);
  // }, []);

  return (
    <div
      className="lottie_animation"
      style={loading ? loadingStyle : noneStyle}
    >
      <div id="lottie"></div>
    </div>
  );
};

export default Loader;
