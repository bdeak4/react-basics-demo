import Intern from "./Intern";

const InternList = ({ interns }) => {
  return (
    <div>
      {interns.map((intern) => (
        <Intern intern={intern} key={intern.firstName} />
      ))}
    </div>
  );
};

export default InternList;
