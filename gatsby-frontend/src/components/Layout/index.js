import React, { useEffect } from "react"
import sal from "sal.js"
import GlobalStyle from "../style/GlobalStyle"
import { StyledLayout } from "./styles/layout.style"
import Navigation from "../Navigation/"
import Footer from "../Footer"
import "../../../node_modules/sal.js/dist/sal.css"

const Layout = props => {
  const { title, children, home, about } = props
  useEffect(sal, [])

  return (
    <StyledLayout {...props}>
      <GlobalStyle />
      <Navigation home={home} />
      <main className={home ? "main home" : "main"}>
        <section className={about ? "main__body about" : "main__body"}>
          {title && (
            <header
              className="main__heading small-section"
              data-sal-duration="1200"
              data-sal="slide-left"
              data-sal-delay="300"
              data-sal-easing="ease-out-bounce"
            >
              <h1 className="title">{title}</h1>
              <span className="decorative-title">{title}</span>
            </header>
          )}
          {children}
        </section>
      </main>
      <Footer />
    </StyledLayout>
  )
}

export default Layout
