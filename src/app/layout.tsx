import './globals.css'
import Sidebar from '@/components/Sidebar'
import Navbar from '@/components/Navbar'

export const metadata = {
  title: 'Rauf',
  description: 'Web Developer'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />

        {children}
      </body>
    </html>
  )
}
