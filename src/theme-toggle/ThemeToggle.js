import './ThemeToggle.css';
import {toggle} from './themeSlice';
import {useSelector, useDispatch} from 'react-redux';

function ThemeToggle() {
  const dispatch = useDispatch();
  const themeNumber = useSelector((state) => state.theme.number);
  const themePrefix = `--theme-${themeNumber}`;
  const translateX = themeNumber === 3 ? 43 : themeNumber === 2 ? 20 : 0;

  return (
    <div className="theme-toggle">
      <span className="theme-toggle__name">THEME</span>
      <div className="theme-toggle__toggle">
        <div className="theme-numbers">
          <span>1</span>
          <span>2</span>
          <span>3</span>
        </div>
        <button 
          className="theme-toggle__radio-button"
          title="Change Calculator App Theme"
          style={{
            backgroundColor: `var(${themePrefix}--alt-container-bg-color)`,
          }}
          onClick={() => dispatch(toggle())}
        >
          <span 
            className="theme-toggle__radio" 
            style={{
              transform: `translateX(${translateX}px)`,
              backgroundColor: `var(${themePrefix}--accent-1-color)`
            }}
          />
        </button>
      </div>
    </div>
  );
}

export default ThemeToggle;