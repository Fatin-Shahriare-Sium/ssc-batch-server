import '../styles/sass/index.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import SingleTab from './component/singleTab'
import { createClient, Provider } from 'urql';
import { SessionProvider } from "next-auth/client"
import Offcanvas from './component/offCanvas'


function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const client = createClient({
    url: 'http://localhost:5000/',
  });

  let router = useRouter()

  let [showCanvas, setShowCanvas] = useState(false)

  function toggleCanvas() {
    return setShowCanvas(pre => !pre)
  }

  function renderComponent() {
    if (router.pathname == '/signup' || router.pathname == '/login') {
      return <Component {...pageProps} />
    } else if (router.pathname == '/dasboard' || router.pathname == '/dasboard/profile') {

      return (
        <div style={{ height: '100vh' }} className='container-fluid'>

          <div className='row'>
            {/* offcanvas start */}
            {showCanvas && <Offcanvas handleCanvas={toggleCanvas}>
              <SingleTab icon='./profile.svg' tabName='Profile' href={`/dasboard/profile`} active={router.pathname == `/dasboard/profile` ? true : false} />
              <SingleTab icon='./news.svg' tabName='News' href='/news' active={router.pathname == '/dasboard/news' ? true : false} />
            </Offcanvas>}
            {/* offcanvas end */}
            <div style={{ borderRight: '3px solid #0063FF', height: '100vh' }} className="col-md-3 dasboard-left">
              <p style={{ fontSize: '3rem', fontWeight: '700', textAlign: 'center' }}>Data Center</p>
              <SingleTab icon='./profile.svg' tabName='Profile' href={`/dasboard/profile`} active={router.pathname == `/dasboard/profile` ? true : false} />
              <SingleTab icon='./news.svg' tabName='News' href='/news' active={router.pathname == '/dasboard/news' ? true : false} />
              {/* <SingleTab  /> */}
            </div>
            <div style={{ overflowY: 'auto', height: '100vh' }} className='col-md-9 dasboard-right'>
              <div className='mt-3 mx-5'>
                <img className='menu-icon' onClick={toggleCanvas} style={{ cursor: "pointer" }} src='./menu.svg' alt="" />
              </div>
              <Component {...pageProps} />
            </div>
          </div>
        </div>
      )

    }
  }

  return (
    <Provider value={client}>

      <div>
        {renderComponent()}
      </div>

    </Provider>
  )


}

export default MyApp
