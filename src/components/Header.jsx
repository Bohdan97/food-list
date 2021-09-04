import ButtonAdd from './ButtonAdd';

const Header = ({ onAdd, showAdd }) => {
  return (
    <div className="nav">
      <h1>Food List</h1>
      <ButtonAdd
        color={showAdd ? 'red' : 'green'}
        text={showAdd ? 'Close' : 'Add'}
        onClick={onAdd}
      />
    </div>
  );
};

export default Header;
