import Head from "next/head"
import { FC, PropsWithChildren } from "react"
import { Navbar } from "../ui"

interface Props {
    title?: string
}

const origin = (typeof window === "undefined") ? "" : window.location.origin 

export const Layout: FC<PropsWithChildren<Props>> = ({children, title}) => {

  return (
    <>
        <Head>
            <title>{title || "Pokemon App"}</title>
            <meta name="author" content="Reyalic" />
            <meta name="description" content={`Data about pokemon ${title}`} />  
            <meta name="keywords" content={`${title}, pokemon, pokedex`} />
            <meta property="og:title" content={`Info about ${title}`} />
            <meta property="og:description" content={`A page about ${title}`} />
            <meta property="og:image" content={`${origin}/img/banner.png`}/>
        </Head>

        <Navbar />

        <main style={{
            padding: "0px 20px"
        }}>
            {children}
        </main>
    </>
  )
}
