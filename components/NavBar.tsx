import {
  Badge,
  Box,
  Button,
  chakra,
  Flex,
  FormControl,
  FormLabel,
  Link,
  Stack,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import React, { PropsWithChildren } from "react";
import { Switch } from "@chakra-ui/react";
import { MoonIcon } from "@chakra-ui/icons";
import { useUser } from "../utils/useUser";
import { useSubscription } from "../utils/useSubscription";
import { SubscriptionType } from "../types";

const Logo: React.FunctionComponent = () => {
  const bg = useColorModeValue("black", "white");
  const subscription = useSubscription();

  return (
    <Box height="3rem" display="flex" alignItems="center">
      <NextLink href="/" passHref legacyBehavior>
        <Link
          display="flex"
          alignItems="center"
          gap={3}
          fontSize="1.25rem"
		  borderBottom="none"
          _hover={{
            textDecor: "none",
			borderBottom: "none",
          }}
          color={bg}
        >
          <chakra.svg viewBox="0 0 100 100" height={7} width={7}>
            <chakra.circle r={50} fill={bg} cx={50} cy={50} />
          </chakra.svg>
          <Box as="span" fontFamily="heading">
            ChordPic
          </Box>
          {subscription === SubscriptionType.PRO && <Badge>PRO</Badge>}
        </Link>
      </NextLink>
    </Box>
  );
};

const CloseIcon = () => {
  const bg = useColorModeValue("black", "white");

  return (
    <svg width="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
      <title>Закрыть</title>
      <path
        fill={bg}
        d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
      />
    </svg>
  );
};

const MenuIcon = () => {
  const fill = useColorModeValue("black", "white");
  return (
    <svg
      width="24px"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      fill={fill}
    >
      <title>Меню</title>
      <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
    </svg>
  );
};

const MenuToggle: React.FunctionComponent<{
  toggle(): void;
  isOpen: boolean;
}> = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? <CloseIcon /> : <MenuIcon />}
    </Box>
  );
};

const MenuItem: React.FunctionComponent<
  PropsWithChildren<{ isLast?: boolean; to: string; onNavigate(): void }>
> = ({ children, onNavigate, to = "/" }) => {
  return (
    <NextLink href={to} passHref legacyBehavior>
      <Link 
		whiteSpace="nowrap" 
		borderBottom="none"
		 _hover={{
			borderBottom: "none",
			}}
		onClick={onNavigate}>
        {children}
      </Link>
    </NextLink>
  );
};

const MenuLinks: React.FunctionComponent<{
  isOpen: boolean;
  onCloseMenu(): void;
}> = ({ isOpen, onCloseMenu }) => {
  const { user } = useUser();
  const { pathname } = useRouter();
  const { colorMode, toggleColorMode } = useColorMode();
  const subscription = useSubscription();

  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        spacing={8}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        pt={[4, 4, 0, 0]}
      >
        {pathname !== "/" && (
          <Box>
            <NextLink href="/" passHref legacyBehavior>
              <Button as="a" size="md" onClick={onCloseMenu} variant="solid-shadow-button">
                ← Создать диаграмму
              </Button>
            </NextLink>
          </Box>
        )}
        <FormControl
          display="flex"
          alignItems="center"
          justifyContent={["center", "flex-end", "center", "center"]}
        >
          <FormLabel
            htmlFor="dark-mode"
            mb="0"
            display="flex"
            alignItems="center"
          >
            <MoonIcon />
          </FormLabel>
          <Switch
            id="dark-mode"
            onChange={toggleColorMode}
            isChecked={colorMode === "dark"}
          />
        </FormControl>
        <MenuItem onNavigate={onCloseMenu} to="/help">
          FAQ
        </MenuItem>
        <MenuItem onNavigate={onCloseMenu} to="/news">
          Новости
        </MenuItem>
        {subscription === SubscriptionType.FREE && (
          <MenuItem onNavigate={onCloseMenu} to="/pricing">
            Цены
          </MenuItem>
        )}

        {user ? (
          <>
            <MenuItem onNavigate={onCloseMenu} to="/account">
              Аккаунт
            </MenuItem>
            <MenuItem onNavigate={onCloseMenu} to="/api/auth/logout">
              Выйти
            </MenuItem>
          </>
        ) : (
          <MenuItem to="/signin" onNavigate={onCloseMenu}>
            Войти
          </MenuItem>
        )}
		
		{pathname !== "https://samesound.ru" && (
          <Box>
            <NextLink href="https://samesound.ru" target="_blank" passHref legacyBehavior>
              <Button as="a" size="md" onClick={onCloseMenu} variant="solid-red-samesound">
                На SAMESOUND →
              </Button>
            </NextLink>
          </Box>
        )}
		
      </Stack>
    </Box>
  );
};

const NavBarContainer: React.FunctionComponent<PropsWithChildren<{}>> = ({
  children,
  ...props
}) => {
  const textColor = useColorModeValue("black", "white");
  const bg = useColorModeValue("gray.100", "gray.900");

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      h="min-content"
      p={4}
      bg={bg}
      color={textColor}
      {...props}
    >
      {children}
    </Flex>
  );
};

export const NavBar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavBarContainer>
      <Logo />
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} onCloseMenu={() => setIsOpen(false)} />
    </NavBarContainer>
  );
};
