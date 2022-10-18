import Header from '~/components/Header'
import SearchBar from '~/components/SearchBar'
import Footer from '~/components/Footer'

function DefaultLayout({ children }) {
  return (
    <div>
      <Header />
      <div className="container">
        <SearchBar />
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default DefaultLayout
