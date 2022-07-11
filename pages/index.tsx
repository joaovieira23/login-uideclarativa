import { Flex, Grid, Heading, Input, Link, Button, Text } from '@chakra-ui/react';

export default function Home() {
  return (
    <Grid
      as="main"
      height="100vh"
      templateColumns="1fr 480px 480px 1fr"
      templateRows="1fr 480px 1fr"
      templateAreas="
        '. . . .'
        '. logo form .'
        '. . . .'
      "
      justifyContent="center"
      alignItems="center"
    >
      <Flex gridArea="logo" flexDir="column" alignItems="flex-start">
        <img src="/logo.png" alt="InovaFarm" />

        <Heading size="2xl" lineHeight="shorter" marginTop={16}>Faça seu login 
          <br/>na plataforma</Heading>
      </Flex>

      <Flex 
        gridArea="form"
        height="100%"
        bg="gray.700"
        borderRadius="md"
        flexDir="column"
        alignItems="stretch"
        padding="16"
        >
          <Input
            height="50px"
            bg="gray.800"
            focusBorderColor="green.500"
            borderRadius="sm"
            _hover={{ color: 'gray.700' }}
            borderColor="gray.700"
            placeholder="E-mail"
          />

          <Input
            height="50px"
            bg="gray.800"
            focusBorderColor="green.500"
            borderRadius="sm"
            _hover={{ color: 'gray.700' }}
            borderColor="gray.700"
            placeholder="Senha"
            mt={2}
          />

          <Link
            alignSelf="flex-start"
            mt={2}
            fontSize="sm"
            color="green.600"
            fontWeight="bold"
            _hover={{ color: 'green.500' }}
          >
            Esqueci minha senha
          </Link>

          <Button
            bg="green.500"
            height="50px"
            borderRadius="sm"
            mt={6}
            _hover={{ backgroundColor: 'green.600' }}
          >
              Entrar
          </Button>

          <Text
            textAlign="center"
            fontSize="sm"
            color="gray.300"
            mt={6}
          >Não tem uma conta? {" "}
            <Link
              color="green.600"
              fontWeight="bold"
              _hover={{ color: 'green.500' }}
            >
              Registre-se
            </Link>
          </Text>
      </Flex>

    </Grid>
  )
}
