import TodoState from '../context/TodoState';

import Layout from '../components/layout';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <TodoState>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </TodoState>
  );
}

export default MyApp;
