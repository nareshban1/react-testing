import React from "react";

const Text = ({ text }: { text: string }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div>
      {text}
      <form>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" />
        <select>
          <option value={"test"}>test</option>
          <option value={"test1"}>test1</option>
        </select>
        <label htmlFor="info">Info</label>
        <textarea name="info" id="info" />
        {isOpen ? (
          <button>Button</button>
        ) : (
          <button type="button" onClick={() => setIsOpen(true)}>
            Open
          </button>
        )}
      </form>
    </div>
  );
};

export default Text;
