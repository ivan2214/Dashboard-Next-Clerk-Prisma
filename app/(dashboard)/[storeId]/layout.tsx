import NavBar from '@/components/NavBar'
import { Button } from '@/components/ui/button'
import Heading from '@/components/ui/heading'
import prismadb from '@/lib/prismadb'
import { SignOutButton, auth, currentUser } from '@clerk/nextjs'
import { redirect } from 'next/navigation'
import { toast } from 'react-hot-toast'

export default async function DashboardLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { storeId: string }
}) {
  const { userId } = auth()
  const user = await currentUser()

  if (!user?.publicMetadata?.admin) {
    return (
      <div className='h-full flex flex-col items-center justify-center gap-10'>
        <Heading title='Necesitas ser admin' description='Acceso denegado' />
        <SignOutButton>
          <Button variant='default' size='lg'>
            Salir
          </Button>
        </SignOutButton>
      </div>
    )
  }

  if (!userId) redirect('/sign-in')

  const store = await prismadb.store.findFirst({ where: { id: params.storeId, userId } })

  if (!store) {
    redirect('/')
  }

  return (
    <>
      <NavBar />
      {children}
    </>
  )
}
