import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import { MovieIDContext } from '../Context/MovieIDContext'


function MyApp({ Component, pageProps }) {

  return ( 
  <MovieIDContext>
    <Component {...pageProps} />
  </MovieIDContext>
)
}

export default MyApp
