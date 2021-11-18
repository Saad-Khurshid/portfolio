import Layout from "../components/Layout";
import { AnimatePresence } from "framer-motion";
// import "../styles/tailwindcssBuild.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps, router }) {
  return (
    <Layout>
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;
