import {
  Avatar,
  Button,
  chakra,
  Container,
  Flex,
  Heading,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  useToast,
} from '@chakra-ui/react'
import { useAuthContext } from '@src/feature/auth/provider/AuthProvider'
import { FirebaseError } from 'firebase/app'
import { getAuth, signOut } from 'firebase/auth'
import { useRouter } from "next/router"
import Link from 'next/link'

export const Header = () => {
  const { user } = useAuthContext()
  const toast = useToast()
  const { push } = useRouter()

  const handleSignOut = async () => {
    try {
      const auth = getAuth()
      await signOut(auth)
      toast({
        title: 'ログアウトしました。',
        status: 'success',
        position: 'top',
      })
      push('/signin')
    } catch (e) {
      if (e instanceof FirebaseError) {
        console.log(e)
      }
    }
  }
  return (
    <chakra.header py={4} bgColor={'blue.600'}>
      <Container maxW={'container.lg'}>
        <Flex>
          <Link href={'/'} passHref>
            <Heading color={'white'}>リアルタイムチャット</Heading>
          </Link>
          <Spacer aria-hidden />
          {user ? (
            <Menu>
              <MenuButton>
                <Avatar flexShrink={0} width={10} height={10} />
              </MenuButton>
              <MenuList py={0}>
                <MenuItem onClick={handleSignOut}>サインアウト</MenuItem>
              </MenuList>
            </Menu>
          ) : (
            <Link href={'/signin'} passHref>
              <Button colorScheme={'teal'}>サインイン</Button>
            </Link>
          )}
        </Flex>
      </Container>
    </chakra.header>
  )
}
