import './NumberKey.css';
import PropTypes from 'prop-types';

function NumberKey({number}) {
  return (
    <div className="number-key">{number}</div>
  );
}

NumberKey.propTypes = {
  number: PropTypes.number,
};

export default NumberKey;