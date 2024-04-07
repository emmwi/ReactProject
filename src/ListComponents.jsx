import PropTypes from "prop-types";

function listItems(props) {
  const { items } = props;
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}
listItems.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default listItems;
