import { intern } from "./data";

const App = () => {
  return (
    <div>
      <h1 className="heading">
        Pozdrav {intern.firstName} {intern.lastName}
      </h1>
    </div>
  );
};

export default App;
