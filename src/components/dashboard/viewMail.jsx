import Proptype from 'prop-types';
import React from 'react';
import { dateFormatter } from '../../utilities/index';

const ViewMail = ({ data }) => (
    <React.Fragment>
    {data.map((msg, ind) => {
      const {
        senderFirstName,
        receiverFirstName,
        senderEmail,
        receiverEmail,
        createdOn,
        subject,
        message,
      } = msg;

      return (
        <div key={ind}>
          <div className={senderEmail === localStorage.getItem('userEmail') ? 'top away' : 'top'}>
            <div>
              <div>
                <p>{senderFirstName || receiverFirstName}</p>
                <p>{senderEmail || receiverEmail}</p>
              </div>
            </div>
            <label>{dateFormatter(createdOn, true)}</label>
          </div>
          <h2>{subject}</h2>
          <div>{message}</div>
        </div>
      );
    })}
    </React.Fragment>
);

ViewMail.propTypes = {
  data: Proptype.arrayOf(Proptype.object.isRequired),
};
export default ViewMail;
