import { useState } from "react";
import InternForm from "./components/InternForm";
import InternList from "./components/InternList";
import { interns as defaultInterns } from "./data";

const App = () => {
  const [interns, setInterns] = useState(defaultInterns);

  const handleAddIntern = (newIntern) => {
    setInterns([...interns, newIntern]);
  };

  return (
    <div>
      <InternForm handleAddIntern={handleAddIntern} />
      <InternList interns={interns} />
    </div>
  );
};

export default App;
