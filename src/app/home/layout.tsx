import '@mantine/core/styles.css'
import { TheNavbar } from '../../components/Navbar/Navbar.component'
import { getAccessToken } from '@/lib/cookiesManager'
import { redirect } from 'next/navigation'
import { profile } from '../services/userService'

export default async function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const accessToken = getAccessToken()
  if (!accessToken) {
    redirect('/auth')
  }
  const userProfile = await profile()
  if (userProfile) {
    return (
      <TheNavbar userProfile={userProfile}>
        {accessToken && <>{children}</>}
      </TheNavbar>
    )
  } else {
    redirect('/')
  }
}
