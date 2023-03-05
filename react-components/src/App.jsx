import Intern from "./components/Intern";
import { interns } from "./data";

const App = () => {
  return (
    <div>
      {interns.map((intern) => (
        <Intern intern={intern} key={intern.firstName} />
      ))}
    </div>
  );
};

export default App;
