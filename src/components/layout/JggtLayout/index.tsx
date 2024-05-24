import { ReactNode } from "react"
import Header from "./_components/Header"
import UserInfo from "./_components/UserInfo"
import Footer from "./_components/Footer"
import Aside from "./_components/Aside"

interface Props {
    children: ReactNode
}


export default function JggtLayout({children} : Props) {
    return(
        <div>
            <UserInfo />
            <Header>
              <Aside />
            </Header>
            <main
                style={{ 
                    minHeight: 'calc(100vh - 28px - 108px - 65px)'
                }}
            >
                {children} 
            </main>
            <Footer />
        </div>
    )
}


