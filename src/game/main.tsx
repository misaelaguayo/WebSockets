import * as React from 'react';
import {createRoot} from 'react-dom/client';

const App = (): JSX.Element => <h1>hello</h1>;

const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(<App />)
