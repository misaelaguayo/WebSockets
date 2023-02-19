import * as React from 'react';
import { createRoot } from 'react-dom/client';
import Messages from './components/messages';
import './styles/App.css'

const App = (): JSX.Element =>
  <div id="app">
    <Messages />
  </div>

const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(<App />)
