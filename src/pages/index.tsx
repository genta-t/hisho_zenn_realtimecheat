import { Center, Heading, Spacer } from '@chakra-ui/react'
import type { NextPage } from 'next'

const Page: NextPage = () => {
  return (
    <>
      <Heading>
        <Spacer height={56} aria-hidden />
        <Center>
          Chakra UI
        </Center>
      </Heading>
    </>
  )
}

export default Page
