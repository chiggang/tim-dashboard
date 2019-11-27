import React, { useEffect } from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Chart } from 'react-chartjs-2';
import { ThemeProvider } from '@material-ui/styles';
import validate from 'validate.js';

import { chartjs } from './helpers';
import theme from './theme';
import 'react-perfect-scrollbar/dist/css/styles.css';
import './assets/scss/index.scss';
import validators from './common/validators';
import Routes from './Routes';
import { useDataDispatch } from 'reducers/context';

import { systemOption } from 'options/system';
import { languageItem } from 'options/language';
import {
  sentenceItem_common,
  sentenceItem_move,
  sentenceItem_sidebarMenu,
  sentenceItem_signIn,
  sentenceItem_signUp,
  sentenceItem_test
} from 'options/sentence';
import { sidebarMenuItem } from 'options/sidebarMenu';

const browserHistory = createBrowserHistory();

Chart.helpers.extend(Chart.elements.Rectangle.prototype, {
  draw: chartjs.draw
});

validate.validators = {
  ...validate.validators,
  ...validators
};

const App = () => {
  // Reducer dispatch를 정의함
  const dispatch = useDataDispatch();

  // 최초 한번만 실행함
  useEffect(() => {
    // 시스템의 환경설정을 기억함
    dispatch({
      type: 'systemOption',
      data: systemOption
    });

    // 선택할 수 있는 언어 목록을 기억함
    dispatch({
      type: 'languageItem',
      data: languageItem
    });

    // 다국어 문장 목록을 기억함
    dispatch({
      type: 'sentenceItem',
      data: [
        ...sentenceItem_common,
        ...sentenceItem_move,
        ...sentenceItem_sidebarMenu,
        ...sentenceItem_signIn,
        ...sentenceItem_signUp,
        ...sentenceItem_test
      ]
    });

    // 현재 선택한 언어를 기억함
    dispatch({
      type: 'currentLanguageCode',
      data: systemOption.defaultLanguageCode
    });

    // 좌측 메뉴를 기억함
    dispatch({
      type: 'sidebarMenuItem',
      data: sidebarMenuItem
    });

    // 좌측 메뉴의 출력여부 기억함
    dispatch({
      type: 'currentOpenedSidebarMenu',
      data: systemOption.defaultOpenedSidebarMenu
    });

  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <Router history={browserHistory}>
        <Routes />
      </Router>
    </ThemeProvider>
  );
};

// export default class App extends Component {
//   render() {
//     return (
//       <ThemeProvider theme={theme}>
//         <Router history={browserHistory}>
//           <Routes />
//         </Router>
//       </ThemeProvider>
//     );
//   }
// }

export default App;
