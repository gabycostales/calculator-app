import './App.css';
import {useSelector} from 'react-redux';
import ThemeToggle from './theme-toggle/ThemeToggle';

function App() {
  const themeNumber = useSelector((state) => state.theme.number);
  const themePrefix = `--theme-${themeNumber}`;

  return (
    <div 
      className={`App theme-${themeNumber}`}
      style={{
        color: `var(${themePrefix}--text-color)`,
        backgroundColor: `var(${themePrefix}--page-bg-color)`,
      }}
    >
      <div className="calculator__container">
        <div className="calculator__header">
          <h1>calc</h1>
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}

export default App;
