import Intern from "./components/Intern";
import { firstIntern, secondIntern } from "./data";

const App = () => {
  return (
    <div>
      <Intern
        firstName={firstIntern.firstName}
        lastName={firstIntern.lastName}
      />
      <Intern {...secondIntern} />
    </div>
  );
};

export default App;
