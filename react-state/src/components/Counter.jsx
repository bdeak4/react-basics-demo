import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prev) => prev + 1);
    // setCount((prev) => prev + 2);
    // setCount((prev) => prev + 3);
  };

  const isEven = count % 2 === 0;

  return (
    <div>
      <button onClick={handleClick}>+1</button>
      <p className="heading">{count}</p>
      {/* {count % 2 === 0 ? (
        <p style={{ backgroundColor: "yellow" }}>Broj je paran</p>
      ) : (
        <p style={{ backgroundColor: "red" }}>Broj je neparan</p>
      )} */}
      <p style={{ backgroundColor: isEven ? "yellow" : "red" }}>
        Broj je {!isEven && "ne"}paran
      </p>
    </div>
  );
};

export default Counter;
