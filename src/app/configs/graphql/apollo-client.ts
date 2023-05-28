import { ApolloClient, ApolloLink, from } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { HttpLink } from '@apollo/client/link/http';
import { omitDeep, Dictionary } from '@enouvo/react-uikit';
import { onError } from 'apollo-link-error';
import { cache } from './cache';

const mainLink = new HttpLink({ uri: import.meta.env.VITE_CHAT_API_URL });

const withToken = setContext(async () => {
  return {};
});

const authMiddleware = new ApolloLink((operation, forward) => {
  const { headers, token } = operation.getContext();
  operation.setContext({
    headers: {
      ...headers,
      ...(token && {
        authorization: `Bearer ${token}`,
      }),
    },
  });
  return forward(operation);
});

const errorHandler = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path, extensions }) => {
      if (
        (extensions as Dictionary<string> | undefined)?.code ===
        'BAD_USER_INPUT'
      ) {
        // Sentry.captureMessage(
        //   `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
        // );
      }
    });
  }
  if (networkError && 'statusCode' in networkError) {
    // Sentry.captureException(networkError);
  }
}) as unknown as ApolloLink;

const cleanTypenameLink = new ApolloLink((operation, forward) => {
  if (!operation.variables.file) {
    operation.variables = omitDeep(operation.variables, '__typename');
  }
  return forward(operation);
});

export const client = new ApolloClient({
  cache,
  connectToDevTools: !import.meta.env.VITE_NODE_ENV,
  defaultOptions: {
    watchQuery: {
      notifyOnNetworkStatusChange: true,
    },
  },
  link: from([
    cleanTypenameLink,
    withToken,
    errorHandler,
    authMiddleware,
    mainLink,
  ]),
});
