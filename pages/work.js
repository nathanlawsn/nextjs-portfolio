import Head from 'next/head'
import Link from 'next/link'
import { projects } from '../lib/data'

export default function Work() {
  return (
    <div>
      <Head>
        <title>Nathan Lawson | Work</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          A few examples of the stuff I've worked on
        </h1>

        <div className="grid gap-8 my-8 | lg:grid-cols-2 lg:gap-16">
          {projects.map((item) => (
            <div key={item.title}>
              <h2>{item.title}</h2>
              <p className="prose-2xl">{item.content}</p>
              <Link href={item.url} ><a className="prose-2xl mt-8 inline-block">Visit project</a></Link>
            </div>
          ))} 
        </div>
      </main>
    </div>
  )
}
