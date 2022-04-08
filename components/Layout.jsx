import Nav from "./Nav/nav"
import Footer from "./Footer/footer"

export default function Home({children}) {
  return (
    <>
    <Nav />
    {children}
    </>
  )
}
