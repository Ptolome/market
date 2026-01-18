// app/layout.js
import './globals.scss'
import ReduxProvider from './RduxProvider'

export const metadata = {
  title: 'DiveSea NFT Marketplace',
  description: 'Discover, create and sell NFTs',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ReduxProvider><body>{children}</body></ReduxProvider>
    </html>
  )
}