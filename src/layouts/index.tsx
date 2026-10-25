import type React from "react"
import TheFooter from "./TheFooter"
import TheHeader from "./TheHeader"
import TheMain from "./TheMain"

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
    return (
        <div className="bg-gray-50 min-h-screen">
            <TheHeader />
            <TheMain children={children} />
            <TheFooter />
        </div>
    )
}

export default Layout