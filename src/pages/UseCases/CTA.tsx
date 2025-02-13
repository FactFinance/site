import { Box, Button, Heading, Stack, Text, VStack } from '@chakra-ui/react';
import { ReactNode } from 'react';

export default function UseCasesCTA({
  title,
  description = 'Ready to see how Fact Finance’s data hub can power your tokenized assets solutions?',
}: {
  title: ReactNode;
  description?: ReactNode;
}) {
  return (
    <VStack
      mt={{ base: 4, md: 8 }}
      w="full"
      p={{ base: 8, sm: 24, md: 32 }}
      borderRadius="lg"
      gap={0}
      bgGradient="to-r"
      gradientFrom="whiteAlpha.50"
      gradientTo="bg"
      position="relative"
      boxShadow="2lg"
    >
      <Heading
        fontWeight="bold"
        fontSize={{ base: '3xl', sm: '6xl' }}
        textAlign={{ base: 'left', md: 'center' }}
        lineHeight="1.1"
        maxW={{ base: 'full', md: '3xl' }}
      >
        {title}
      </Heading>
      <br />
      <Text
        fontSize={{ base: 'sm', sm: 'md', md: 'lg' }}
        maxW={{ base: 'full', md: '3xl' }}
        textAlign={{ base: 'left', md: 'center' }}
      >
        {description}
        <br />
        Visit our docs page today or contact us to learn more.
      </Text>
      <Stack direction={{ base: 'column', sm: 'row' }} gap={4} mt={4} w="full" align="center" justify="center">
        <Button
          as="a"
          href="https://docs.fact.finance"
          variant="primary"
          size="lg"
          w={{ base: 'full', sm: 'auto' }}
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit our docs page
        </Button>
        <Button
          as="a"
          href="mailto:fernanda@fact.finance"
          variant="outline"
          size="lg"
          w={{ base: 'full', sm: 'auto' }}
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact us
        </Button>
      </Stack>
      <Box
        position="absolute"
        top="75px"
        left="50%"
        transform="translate(-50%, -50%)"
        w="500px"
        h="150px"
        bg="radial-gradient(circle, {colors.brand.800} 0%, {colors.brand.900} 25%, transparent 100%)"
        filter="blur(60px)"
        zIndex={-1}
      />
    </VStack>
  );
}
