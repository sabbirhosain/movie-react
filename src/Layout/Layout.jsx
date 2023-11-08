import { Helmet } from "react-helmet"
import Footer from "../Component/Footer/Footer"
import Navbar from "../Component/Navbar/Navbar"

const Layout = ({ children, title }) => {
  return (
    <>
      <div>
        
        {/* <head> */}
          <Helmet>
            <title>{title}</title>
          </Helmet>
        {/* </head> */}

        <header>
          <Navbar />
        </header>

        <main>
          {children}
        </main>

        <footer>
          <Footer />
        </footer>

      </div>
    </>
  )
}

export default Layout