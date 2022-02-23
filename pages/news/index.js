// our-domain.com/new
import Link from 'next/link'
import { Fragment } from "react"

function news() {
  return (
    <Fragment>
      <h1>The news page</h1>
      <ul>
        <li>
          <Link href="/news/holi">
            next js is a frackmework
          </Link>
        </li>
        <li>
          <a href="">
            something else
          </a>
        </li>
      </ul>
    </Fragment>
  )
}


export default news