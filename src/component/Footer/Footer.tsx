import { chakra, Container, Flex, Link } from "@chakra-ui/react"

export const Footer = () => {
  return (
    <chakra.footer py={4} bgColor={'blue.600'} color={'white'}>
      <Container maxW={'container.lg'}>
        <Flex flexDirection={'column'} gap={2} alignItems={'start'}>
          <Link lineHeight={1} href={'/'}>トップページ</Link>
          <Link lineHeight={1} href={'/signin'}>サインイン</Link>
          <Link lineHeight={1} href={'/signup'}>サインアップ</Link>
          <Link lineHeight={1} href={'/chat'}>チャット</Link>
        </Flex>
      </Container>
    </chakra.footer>
  )
}