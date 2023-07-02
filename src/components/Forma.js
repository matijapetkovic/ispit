import React, { useState } from "react";

const Forma = (props) => {
  const [ime, setIme] = useState("");

  const onChange = (e) => {
    setIme(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setIme("");
    props.onSendInput(ime);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <p>Github user name</p>
        <input
          type="text"
          placeholder="Upišite ime korinsika"
          value={ime}
          typeof="text"
          onChange={onChange}
          autoFocus={true}
        />
        <p>
          <button>Pretraži</button>
        </p>
      </form>
    </div>
  );
};

export default Forma;
