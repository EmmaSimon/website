import React from 'react';
import PropTypes from 'prop-types';
import Collapsible from 'react-collapsible';

export default function InfoSection({ header, body, id }) {
  return (<Collapsible
    trigger={<h2 className="section-header">{header}</h2>}
    accordionPosition={id}
  >
    <div className="content">
      {body}
    </div>
  </Collapsible>);
}

InfoSection.propTypes = {
  header: PropTypes.string.isRequired,
  body: PropTypes.string,
  id: PropTypes.string.isRequired,
};

InfoSection.defaultProps = {
  body: '',
};
