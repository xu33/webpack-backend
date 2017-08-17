import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './client/reducer';
import HelloList from './client/component';
import express from 'express';
let app = express();

app.use(express.static('build'));

app.get('*', (req, res) => {
  let list = ['fuck', 'suck', 'blowjob'];
  let initialState = {
    list
  };

  let store = createStore(reducer, initialState);
  let html = renderToString(
    <Provider store={store}>
      <HelloList />
    </Provider>
  );

  res.write(
    `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf8">
        <title>react server render</title>
        <script>
        window.INITIAL_STATE = ${JSON.stringify(initialState)};
        </script>
        </head>
      <body>
        <div id="target">${html}</div>
        <script src="/vendor.js"></script>
        <script src="/main.js"></script>
      </body>
    </html>
    `
  );

  res.end();
});

app.listen(9500, () => {
  console.log('server started');
});
