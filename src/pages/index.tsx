import { Heading } from '@chakra-ui/react'
import { AuthGuard } from '@src/feature/auth/component/AuthGuard/AuthGuard'
import type { NextPage } from 'next'

const Page: NextPage = () => {
  return (
    <AuthGuard>
      <Heading>Chakra UI</Heading>
    </AuthGuard>
  )
}

export default Page
