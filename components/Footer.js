import Link from 'next/link'

export default function Footer() {
    return (
          <footer className="bg-[#0a1628] text-white">
            <div className="max-w-7xl mx-auto px-6 py-16">
              <div className="grid md:grid-cols-3 gap-12 mb-12">
                <div>
                  <div className="text-[#c9a96e] text-4xl font-playfair font-bold tracking-widest mb-4">88</div>
              <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                    Focused vision, strong values, a long-term strategy and a history of excellence.
      </p>
      </div>
            <div>
                  <p className="text-xs tracking-widest uppercase text-gray-500 mb-6">Navigation</p>
              <ul className="space-y-3">
    {[
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/careers', label: 'Careers' },
                    ].map(link => (
                                      <li key={link.href}>
                                        <Link href={link.href} className="text-gray-400 text-sm hover:text-[#c9a96e] transition-colors tracking-wide">
                      {link.label}
                      </Link>
                      </li>
                                        ))}
      </ul>
      </div>
            <div>
                  <p className="text-xs tracking-widest uppercase text-gray-500 mb-6">Contact</p>
              <a href="mailto:info@still88.com" className="text-gray-400 text-sm hover:text-[#c9a96e] transition-colors">
                    info@still88.com
      </a>
      </div>
      </div>
          <div className="border-t border-white border-opacity-10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-gray-500 text-xs tracking-wider">
                  Copyright &copy; 2012 still88. All rights reserved.
      </p>
            <div className="flex gap-6">
                  <span className="text-gray-600 text-xs">Hospitality Investment and Management</span>
      </div>
      </div>
      </div>
      </footer>
    )
}
