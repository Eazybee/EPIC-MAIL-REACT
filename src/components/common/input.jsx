import React from 'react';
import Proptype from 'prop-types';

const Input = (props) => {
  const { onChange, disabled } = props;
  const {
    type, name, placeholder, value, required,
  } = props.data;
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      disabled={disabled}
      value={value}
      onChange={onChange}
      required={required}
    />
  );
};

Input.propTypes = {
  data: Proptype.shape({
    type: Proptype.string.isRequired,
    name: Proptype.string.isRequired,
    placeholder: Proptype.string.isRequired,
    required: Proptype.bool.isRequired,
  }),
  value: Proptype.string.isRequired,
  disabled: Proptype.bool.isRequired,
  onChange: Proptype.func.isRequired,
};

export default Input;
