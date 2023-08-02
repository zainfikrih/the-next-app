import '@mantine/core/styles.css'
import { TheNavbar } from '../../components/Navbar/Navbar.component'
import { getAccessToken } from '@/lib/cookiesManager'
import { redirect } from 'next/navigation'

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const accessToken = getAccessToken()
  if (!accessToken) {
    redirect('/auth')
  }
  return (
    <TheNavbar>
      {accessToken && <>{children}</>}
    </TheNavbar>
  )
}
