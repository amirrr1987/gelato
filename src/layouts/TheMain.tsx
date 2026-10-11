import type React from "react"
const TheMain : React.FC<React.PropsWithChildren> = ({ children }) => {
    return (
        <main>
          {children}
        </main>
    )
}

export default TheMain