import React, { FC } from 'react';

import { Provider } from 'react-redux';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';

import { ErrorBoundary } from 'components/index';

import store from './store';
import Route from './routes';

moment.locale('zh-cn');

const popupContainer = (trigger: any) => {
  if (trigger && trigger.classList.contains('ant-select')) {
    return trigger.parentElement || trigger.parentNode;
  }
  const container = document.getElementById('container');
  return container || document.body;
};

const App: FC = () => {
  return (
    <ErrorBoundary fallback={<>loading</>}>
      <ConfigProvider locale={zhCN} getPopupContainer={popupContainer}>
        <Provider store={store}>
          <Route />
        </Provider>
      </ConfigProvider>
    </ErrorBoundary>
  );
};

export default App;
