import PropTypes from "prop-types";

function PropsRules(props) {
  const pRulesStyle = {
    marginTop: "auto",
    paddingLeft: "0.5rem",
  };
  return (
    <>
      <h2>{props.header}</h2>
      <p style={pRulesStyle}>{props.ruleInformation}</p>
    </>
  );
}

PropsRules.propTypes = {
  header: PropTypes.string.isRequired,
  ruleInformation: PropTypes.string,
};

export default PropsRules;
