import Link from 'next/link'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <div className="mx-auto w-9/12">
        <header className="py-8">
          <nav>
            <ul className="flex space-x-8 items-center justify-end py-8 text-2xl font-semibold">
              <li><Link href="/"><a>About</a></Link></li>
              <li><Link href="/work"><a>Work</a></Link></li>
            </ul>
          </nav>
        </header>
      <Component {...pageProps} />
      </div>
      <footer className="bg-black text-white py-8 mt-16 font-medium | lg:mt-32">
        <div className="mx-auto w-9/12 md:flex justify-between">
          <span>Built with Next.js, Tailwind CSS and Vercel</span>
          <span>© Nathan Lawson 2021</span>
        </div>
      </footer>
    </div>
  );
}

export default MyApp
