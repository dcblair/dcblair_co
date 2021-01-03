import { ThemeProvider } from '@material-ui/core';

function App() {
  return (
    <div>
      <ThemeProvider theme={ theme }>
        <Home />
      </ThemeProvider>
    </div>
  );
}

export default App;
