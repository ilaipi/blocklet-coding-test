import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { SnackbarProvider } from 'notistack';

import Home from "./pages/home";

import "./app.css";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default function WrappedApp() {
  // While the blocklet is deploy to a sub path, this will be work properly.
  const basename = window?.blocklet?.prefix || '/';

  return (
    <Router basename={basename}>
      <SnackbarProvider maxSnack={3}>
        <App />
      </SnackbarProvider>
    </Router>
  );
}
