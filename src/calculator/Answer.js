import './Answer.css';
import {useSelector} from 'react-redux';

function Answer() {
  const themeNumber = useSelector((state) => state.theme.number);
  const themePrefix = `--theme-${themeNumber}`;
  const displayValue = useSelector((state) => {
    const {input, result, currentInput} = state.calculator || {};

    switch (currentInput) {
      case 'a':
        return input.a;
  
      case 'b':
        return input.b;
  
      default:
        return result;
    }
  });

  return (
    <div
      className="result-container"
      style={{backgroundColor: `var(${themePrefix}--container-bg-color)`}}
    >
      {displayValue}
    </div>
  );
}

export default Answer;