import PropTypes from "prop-types";
//Primera  forma de poner por defecto un valor a una variable

export function Button({ text, category = "Uncategorized" }) {
  if (!text) console.error("El texto es requerido");
  return (
    <button
      onClick={() => {
        alert(`${text} - ${category}`);
      }}
    >
      {text} - {category}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

//Segunda forma de poner por defecto valores
Button.defaultProps = {
  category: "Unknow",
};
