'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
    return (
          <>
    {/* Hero - full screen city skyline */}
            <section className="relative w-full overflow-hidden" style={{minHeight: '100vh'}}>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{backgroundImage: "url('http://3.141.1.117/wp-content/uploads/2016/01/sky_scrapers.jpg')"}}
        />
        <div className="absolute inset-0 bg-black/40" />
        {/* About text overlay at bottom of hero */}
        <div className="absolute bottom-0 left-0 right-0 bg-black/60 px-12 py-10 max-w-5xl">
                    <p className="text-white text-base md:text-lg leading-relaxed mb-6">
                      At still88, our foundation is built on unwavering commitments—to our dedicated team members, the communities we serve and our investors. Our investment philosophy is straightforward: we focus on creating sustainable, measured value. By employing established methodologies and innovative strategies, still88 has developed a proven track record in identifying and seizing commercial investment opportunities that yield exceptional returns. We are dedicated to not just meeting expectations, but exceeding them, fostering growth and success for all involved.
          </p>
          <Link href="/services" className="inline-flex items-center gap-2 border border-white text-white px-6 py-3 text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-colors duration-300">
                      READ MORE <span>›</span>
          </Link>
          </div>
          </section>

{/* Our Partners */}
      <section className="py-16 px-6 bg-gray-50">
                <div className="max-w-5xl mx-auto text-center">
                  <h2 className="text-2xl tracking-widest uppercase mb-2">
                    OUR <span className="text-[#1a3a8c]">PARTNERS</span>
        </h2>
          <div className="w-12 h-0.5 bg-gray-400 mx-auto mb-10" />
                  <div className="flex flex-wrap justify-center items-center gap-12">
                    <div className="w-48 h-24 flex items-center justify-center bg-white border border-gray-200 p-4">
                      <img src="http://3.141.1.117/wp-content/uploads/2025/06/marriott-intl-logo.png" alt="Marriott International" className="max-h-16 max-w-full object-contain" />
        </div>
            <div className="w-48 h-24 flex items-center justify-center p-4">
                      <img src="http://3.141.1.117/wp-content/uploads/2016/01/kriyahotels-1.png" alt="Kriya Hotels" className="max-h-16 max-w-full object-contain" />
        </div>
            <div className="w-48 h-24 flex items-center justify-center border border-gray-300 p-4">
                      <img src="http://3.141.1.117/wp-content/uploads/2025/06/hilton-logo.png" alt="Hilton" className="max-h-12 max-w-full object-contain" />
        </div>
        </div>
        </div>
        </section>
        </>
  )
}
