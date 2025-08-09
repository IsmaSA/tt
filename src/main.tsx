import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { HashRouter } from 'react-router-dom'

// Mount the React application to the DOM.  Vite injects a div with
// id="root" into index.html, and this file is referenced by
// <script type="module" src="/src/main.tsx"></script>.
//const rootElement = document.getElementById("root");
//if (!rootElement) {
 // throw new Error("Root element not found");
//}

createRoot(rootElement).render(<App />);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
)