import '@/styles/globalStyle.js'
import "tailwindcss/tailwind.css"
import MultiProvider from "@/Config/MultiProvider";
import Provider from "@/Context";

export default function App({ Component, pageProps }) {
  return (<>
  <MultiProvider providers={[<Provider.DataProvider key={1} />]}>
    <Component {...pageProps} />
  </MultiProvider>
  </>
  )
}
