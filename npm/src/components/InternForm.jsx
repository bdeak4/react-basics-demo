import { useState } from "react";
import { toast } from "react-toastify";

const InternForm = ({ handleAddIntern }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!firstName || !lastName) {
      toast("Please fill out all fields", { type: "error" });
      return;
    }

    handleAddIntern({ firstName, lastName });

    toast("Intern added!", { type: "success" });

    setFirstName("");
    setLastName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <div>First name</div>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </label>
      <label>
        <div>Last name</div>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </label>
      <button type="submit">Save</button>
    </form>
  );
};

export default InternForm;
