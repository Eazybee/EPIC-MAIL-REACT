import React, { useState } from 'react';
import Proptype from 'prop-types';

const MailView = ({
  onClick,
  onSelect,
  data: {
    id, mail, subject, message, date, type,
  },
}) => {
  const [isSelected, setSelected] = useState(false);
  const handleClick = () => onClick(id);
  const handleSelect = () => {
    onSelect(!isSelected, id);
    setSelected(!isSelected);
  };

  return (
    <div className={type}>
        <input type="checkbox" onChange={handleSelect} value={isSelected} />
        <p onClick={handleClick}>{mail}</p>
        <div>
          <p className="subject" onClick={handleClick}>
            {subject}
          </p>
          <p className="msg" onClick={handleClick}>
            {message}
          </p>
        </div>
        <label onClick={handleClick}>{date}</label>
    </div>
  );
};

MailView.propTypes = {
  data: Proptype.object.isRequired,
  onSelect: Proptype.func.isRequired,
  onClick: Proptype.func.isRequired,
};

export default MailView;
