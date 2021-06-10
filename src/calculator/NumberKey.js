import './NumberKey.css';
// import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';

function NumberKey({text, buttonStyleKey = 'button'}) {
  const themeNumber = useSelector((state) => state.theme.number);
  const themePrefix = `--theme-${themeNumber}`;
  const buttonStyle = {
    color: `var(${themePrefix}--button-text-color)`,
    backgroundColor: `var(${themePrefix}--${buttonStyleKey}-bg-color)`,
    boxShadow: `0px -4px 0px 0px var(${themePrefix}--${buttonStyleKey}-shadow-color) inset`,
  };

  if (buttonStyleKey !== 'button') {
    buttonStyle.color = '#FFF'
    buttonStyle.fontSize = '16px';
  }

  return (
    <div className="number-key" style={buttonStyle} title={text}>
      <span>{text}</span>
    </div>
  );
}

// NumberKey.propTypes = {
//   number: PropTypes.number,
// };

export default NumberKey;