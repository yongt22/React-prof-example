import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import App from './App.jsx'
import IndexPage from './components/pages/IndexPage.jsx'

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <StrictMode>
    <IndexPage />
  </StrictMode>
);

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
