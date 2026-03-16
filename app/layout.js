import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export const metadata = {
    title: 'still88 – Focused vision, strong values, a long-term strategy and a history of excellence.',
    description: 'still88 is a hospitality investment and hotel management company with a proven track record in identifying and seizing commercial investment opportunities.',
}

export default function RootLayout({ children }) {
    return (
          <html lang="en">
            <body>
              <Navbar />
              <main>{children}</main>
          <Footer />
      </body>
      </html>
    )
}
