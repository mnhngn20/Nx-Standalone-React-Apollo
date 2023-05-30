import { StrictMode } from 'react';
import { StyleProvider } from '@ant-design/cssinjs';
import { ApolloProvider } from '@apollo/client';
import { ConfigProvider, getPopupContainer } from '@enouvo/react-uikit';
import * as ReactDOM from 'react-dom/client';
import { client } from '#/configs/graphql/apollo-client';
import '#/configs/themes/index.less';
import { Shared } from '@lib/shared/components';
import App from './components/App';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <StrictMode>
    <ApolloProvider client={client}>
      <ConfigProvider getPopupContainer={getPopupContainer}>
        <StyleProvider hashPriority="high">
          <App />
          <Shared />
        </StyleProvider>
      </ConfigProvider>
    </ApolloProvider>
  </StrictMode>,
);
