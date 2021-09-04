const ButtonAdd = ({ onClick, text, color }) => {
  return (
    <button className=" btn-lg button_add" onClick={onClick} style={{ backgroundColor: color }}>
      {text}
    </button>
  );
};

export default ButtonAdd;
