import React from 'react';
import ReactDOM from 'react-dom';
import { CounterApp } from './compoents/01-useState/CounterApp';
import { CounterWithCustomHook } from './compoents/01-useState/CounterWithCustomHook';
import { FormWithCustomHook } from './compoents/02-useEffect/FormWithCustomHook';
import { SimpleForm } from './compoents/02-useEffect/SimpleForm';
import { MultipleCustomHook } from './compoents/03-example/MultipleCustomHook';
import { FocusScreen } from './compoents/04-useRef/FocusScreen';
import { RealExampleRef } from './compoents/04-useRef/RealExampleRef';
import { LayoutEffect } from './compoents/05-useLayoutEffect/LayoutEffect';
import { Padre } from './compoents/05-useLayoutEffect/Padre';
import { CllbackHook } from './compoents/06-memo/CllbackHook';
import { MemoHook } from './compoents/06-memo/MemoHook';
import { Memorize } from './compoents/06-memo/Memorize';
import { Resultado } from './compoents/07-cards/Resultado';
import { HooksApp } from './HooksApp';

ReactDOM.render(
  <Resultado/>,
  document.getElementById('root')
);
