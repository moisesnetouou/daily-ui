import { BrowserRouter as Router } from 'react-router-dom';
import { globalStyles } from '../stitches.config';
import MainRoutes from './routes';

export function App() {
  globalStyles();

  return (
    <Router>
      <MainRoutes />
    </Router>
  );
}
