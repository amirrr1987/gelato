import type React from "react"
import TheFooter from "./TheFooter"
import TheHeader from "./TheHeader"
import TheMain from "./TheMain"

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
    return (
        <>
            <TheHeader />
            <TheMain children={children} />
            <TheFooter />
        </>
    )
}

export default Layout