import {
  Box,
  Button,
  Container,
  Flex,
  GridItem,
  Icon,
  IconButton,
  Link,
  Spacer,
  useColorModeValue,
} from "@chakra-ui/react";
import { TelegramIcon, VKIcon } from "react-share";
import { FaTelegram, FaVk } from "react-icons/fa";

export const Footer = () => {
  const bg = useColorModeValue("gray.100", "gray.900");

  return (
    <GridItem as="footer" bg={bg} display="flex" py={[8, 8, 4]}>
      <Container
        maxW="container.lg"
        display="flex"
        gap={5}
        flexDirection={["column", "column", "row"]}
      >
        <Link
		  href="https://t.me/samesound"
          display="flex"
          alignItems="center"
          gap={2}
          rel="noopener noreferrer"
          target="_blank"
		  borderBottom="none"
		  _hover={{
			borderBottom: "none",
			}}
        >
           <IconButton
            position="relative"
            variant="footer-tg"
			aria-label="SAMESOUND в Телеграме"
            icon={<FaTelegram />}
			height="30px"
			width="30px"
                  />
        </Link>
        <Link
          href="https://vk.com/samesound"
          display="flex"
          alignItems="center"
          gap={2}
          rel="noopener noreferrer"
          target="_blank"
		  borderBottom="none"
		  _hover={{
			borderBottom: "none",
			}}
        >
          <IconButton
            position="relative"
            variant="footer-vk"
			aria-label="SAMESOUND в ВКонтакте"
            icon={<FaVk />}
			height="30px"
			width="30px"
			/>
        </Link>
        <Spacer />
        <Link 
			href="/about"
			borderBottom="none"
			fontWeight="500"
			_hover={{
				borderBottom: "none",
			}}
			>О проекте</Link>
        <Link 
			href="/terms"
			borderBottom="none"
			fontWeight="500"
			_hover={{
				borderBottom: "none",
			}}
			>Условия использования</Link>
        <Link 
			href="/privacy-notice"
			borderBottom="none"
			fontWeight="500"
			_hover={{
				borderBottom: "none",
			}}
			>Политика конфиденциальности</Link>
      </Container>
    </GridItem>
  );
};
