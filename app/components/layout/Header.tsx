import { HamburgerIcon, SunIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  List,
  ListItem,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { useLocation, useNavigate } from "@remix-run/react";
import { useEffect, useState } from "react";
import { ROUTES } from "~/utils/constants";
import type { TMenuItemProps } from "./types";

const CustomMenuItem: React.FC<TMenuItemProps> = ({
  children,
  active = false,
  onClick,
}) => {
  return (
    <ListItem
      onClick={onClick}
      cursor="pointer"
      p={2}
      marginLeft={2}
      bgColor={active ? "teal.200" : "transparent"}
      color={active ? "#000" : "unset"}
    >
      <Text _hover={{ textDecoration: "underline" }} textTransform="capitalize">
        {children}
      </Text>
    </ListItem>
  );
};

const Header: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [current, setCurrent] = useState<string>("/posts");

  useEffect(() => {
    setCurrent(location.pathname === "/" ? "/posts" : location.pathname);
  }, [location.pathname]);

  return (
    <Container>
      <Flex alignItems="center" height={14} p={2} className="header-content">
        <Box>
          <Heading as="h3" size="md">
            Oh dev life
          </Heading>
        </Box>
        <List display={{ base: "none", sm: "flex" }} alignItems="center" ml={6}>
          {ROUTES.map((item) => (
            <CustomMenuItem
              key={item.name}
              href={item.path}
              active={current === item.path}
              onClick={() => navigate(item.path)}
            >
              {item.name}
            </CustomMenuItem>
          ))}
        </List>
        <Spacer />
        <Button bgColor="yellow.500" _hover={{ backgroundColor: "yellow.400" }}>
          <SunIcon />
        </Button>
        <Menu>
          {({ isOpen }: any) => (
            <>
              <MenuButton
                borderWidth="1px"
                display={{ base: "initial", md: "none" }}
                _hover={{ backgroundColor: "transparent" }}
                w={12}
                ml={2}
                h={10}
                rounded="lg"
              >
                <HamburgerIcon />
              </MenuButton>
              <MenuList bg="gray.700" border="none">
                {ROUTES.map((item) => (
                  <MenuItem
                    bg="gray.700"
                    key={item.name}
                    onClick={() => navigate(item.path)}
                    textTransform="capitalize"
                    _hover={{ bg: "gray.500"}}
                  >
                    {item.name}
                  </MenuItem>
                ))}
              </MenuList>
            </>
          )}
        </Menu>
      </Flex>
    </Container>
  );
};

export default Header;
