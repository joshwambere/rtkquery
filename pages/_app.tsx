import '../styles/globals.css'
import '../styles/loader.css'
import type { AppProps } from 'next/app'
import {store} from "../redux/store";
import {Provider} from "react-redux";
import dynamic from "next/dynamic";
import BigLoader from "../components/layout/loaders/BigLoader";

function MyApp({ Component, pageProps }: AppProps) {
  return(
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
  )
}



export default dynamic(() => Promise.resolve(MyApp), {
    ssr: false,
    loading: () => <BigLoader />,
})
