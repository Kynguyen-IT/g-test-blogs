import { Suspense } from 'react';
import Router from './routes';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>loading ....</div>}>
        <Router />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
