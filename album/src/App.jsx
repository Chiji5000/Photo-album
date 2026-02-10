import { useEffect, useState } from "react";
import Project from "./assets/projects/Project.jsx";
import Loader from "./assets/loader/Loader.jsx";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 6500); // start fade at 6.5s

    const removeTimer = setTimeout(() => {
      setLoading(false);
    }, 7000); // remove at 7s

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  return (
    <>
      {loading && <Loader fadeOut={fadeOut} />}
      {!loading && <Project />}
    </>
  );
};

export default App;
