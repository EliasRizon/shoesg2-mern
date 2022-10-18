import Header from '~/components/Header'
import SearchBar from '~/components/SearchBar'
import SlideShow from '~/layouts/components/SlideShow'
import Footer from '~/components/Footer'
import Sidebar from '~/components/Sidebar'

function SlideShowLayout({ children }) {
  return (
    <div>
      <Header />
      <div className="container">
        <SearchBar />
        <SlideShow />
        <div className="grid">
          <div className="grid__row app-content">
            <Sidebar />
            {children}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default SlideShowLayout
