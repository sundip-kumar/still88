import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata = {
  title: 'still88 – Focused vision, strong values, a long-term strategy and a history of excellence.',
  description: 'still88 specializes in hospitality investment, hotel development, operations, and strategic consulting.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main style={{ paddingTop: '72px' }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
