import './Calculator.css';
import Answer from './Answer';
import NumberKey from './NumberKey';
import {useSelector, useDispatch} from 'react-redux';
import {
  reset,
  appendToInput,
  setOperation,
  clearInput,
  getResult,
} from './calculatorSlice';

function Calculator() {
  const dispatch = useDispatch();
  const themeNumber = useSelector((state) => state.theme.number);
  const themePrefix = `--theme-${themeNumber}`;
  const append = (input) => dispatch(appendToInput(input));
  const keys = [
    {text: 7, onClick: () => append('7')},
    {text: 8, onClick: () => append('8')},
    {text: 9, onClick: () => append('9')},
    {text: 'DEL', onClick: () => clearInput(), style: 'accent-2'},
    {text: 4, onClick: () => append('4')},
    {text: 5, onClick: () => append('5')},
    {text: 6, onClick: () => append('6')},
    {text: '+', onClick: () => setOperation('add')},
    {text: 1, onClick: () => append('1')},
    {text: 2, onClick: () => append('2')},
    {text: 3, onClick: () => append('3')},
    {text: '-', onClick: () => setOperation('subtract')},
    {text: '.', onClick: () => append('.')},
    {text: 0, onClick: () => append('0')},
    {text: '\\', onClick: () => setOperation('divide')},
    {text: 'x', onClick: () => setOperation('multiply')},
  ];

  return (
    <div className="calculator">
      <Answer />
      <div
        className="calculator-container"
        style={{
          backgroundColor: `var(${themePrefix}--alt-container-bg-color)`,
        }}
      >
        <div className="calculator-grid">
          {keys.map(({text, onClick, style}) => (
            <NumberKey key={text} text={text} buttonStyleKey={style} onClick={onClick()} />
          ))}
        </div>
        <div className="actions-row">
          <NumberKey text="RESET" buttonStyleKey="accent-2" onClick={() => reset()} />
          <NumberKey text="=" buttonStyleKey="accent-1" onClick={() => getResult()} />
        </div>
      </div>
    </div>
  );
}

export default Calculator;