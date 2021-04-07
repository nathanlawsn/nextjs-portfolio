import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Nathan Lawson | Front-End Developer Sunderland</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css"></link>
      </Head>

      <main>
        <div className="mb-16 md:mb-32">
          <h1>
            Alreet? I'm Nathan
          </h1>

          <h2>I'm a front-end developer and <span class="border-b-8 border-blue-500 border-solid">Drupal</span> specialist from <span class="text-red-700">Sunderland</span></h2>
        </div>

        <div className="prose-2xl">

          <div>
            <h2>Where you'll find me right now</h2>
            <p>I'm currently Lead Front-End Developer at <Link href="https://www.landdigital.agency/"><a>Land Digital</a></Link>.</p>
          </div>

          <h2>Did I mention I also organise one of the North East's biggest tech meetups?</h2>
          <p>In 2017 I co-founded <Link href="https://sunderland.digital/"><a>Sunderland Digital</a></Link> — one of the largest meetups for the digital and tech community in the North East.</p>
          
          <h2>Let's be marras <span class="text-gray-400 font-italic font-medium text-2xl block">(a friend, pal, buddy, mate)</span></h2>
          <p>Follow me on <Link href="https://twitter.com/nathanlawsn"><a>Twitter</a></Link> or connect with me on <Link href="https://www.linkedin.com/in/nathanlawson/"><a>LinkedIn</a></Link>.</p>

        </div>
      </main>
    </div>
  )
}
