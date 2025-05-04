import {
    Flex,
    Heading,
    IconButton,
    useDisclosure,
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    VStack,
    HStack,
    Button,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io';

function Navigation() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [activePath, setActivePath] = useState('/');

    const primaryFontColor = '#faf9ff';
    const secondaryColor = '#bd93f9';

    const navItems = [
        { label: 'Home', path: '/' },
        { label: 'About', path: '/about' },
        { label: 'Labs', path: '/labs' },
        { label: 'Projects', path: '/projects' },
        { label: 'Experiences', path: '/experiences' },
        { label: 'Badges', path: '/badges' },
    ];

    useEffect(() => {
        setActivePath(window.location.pathname);
    }, []);

    const handleNav = (path) => {
        if (path !== window.location.pathname) {
            window.location.href = path;
        }
    };

    const isActive = (path) => activePath.toLowerCase() === path.toLowerCase();

    return (
        <>
            <Flex
                boxShadow="dark-lg"
                backgroundColor="#292b37"
                id="navigation"
                p={5}
                alignItems="center"
                justifyContent="space-between"
            >
                <Flex p={2}>
                    <Heading fontSize="2xl" color={primaryFontColor}>
                        <span style={{ color: secondaryColor, fontWeight: 'bold' }}>🚀D</span>
                        armawan
                    </Heading>
                </Flex>

                {/* Desktop Nav */}
                <HStack spacing={4} display={{ base: 'none', lg: 'flex' }}>
                    {navItems.map(({ label, path }) => (
                        <Button
                            key={path}
                            onClick={() => handleNav(path)}
                            variant={isActive(path) ? 'solid' : 'ghost'}
                            colorScheme="purple"
                            color={primaryFontColor}
                            borderRadius="md"
                            _hover={{
                                bg: isActive(path) ? secondaryColor : '#6b46c1',
                                transform: 'scale(1.1)',
                                transition: 'transform 0.2s ease-in-out',
                            }}
                            _active={{
                                bg: isActive(path) ? secondaryColor : '#6b46c1',
                                transform: 'scale(0.95)',
                            }}
                            _focus={{
                                outline: 'none',
                            }}
                            fontWeight={isActive(path) ? 'bold' : 'normal'}
                            p={4}
                        >
                            {label}
                        </Button>
                    ))}
                </HStack>

                {/* Mobile Hamburger */}
                <IconButton
                    display={{ base: 'inline-flex', lg: 'none' }}
                    icon={<GiHamburgerMenu size={24} />}
                    variant="ghost"
                    color={primaryFontColor}
                    onClick={onOpen}
                    aria-label="Open menu"
                />
            </Flex>

            {/* Mobile Drawer */}
            <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
                <DrawerOverlay />
                <DrawerContent bg="#1A202C" color={primaryFontColor}>
                    <DrawerHeader
                        borderBottomWidth="1px"
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        Menu
                        <IconButton
                            icon={<IoMdClose size={22} />}
                            aria-label="Close menu"
                            variant="ghost"
                            onClick={onClose}
                        />
                    </DrawerHeader>

                    <DrawerBody>
                        <VStack align="stretch" spacing={4} mt={4}>
                            {navItems.map(({ label, path }) => (
                                <Button
                                    key={path}
                                    onClick={() => handleNav(path)}
                                    variant={isActive(path) ? 'solid' : 'ghost'}
                                    colorScheme="purple"
                                    justifyContent="flex-start"
                                    borderRadius="md"
                                    _hover={{
                                        bg: isActive(path) ? secondaryColor : '#6b46c1',
                                        transform: 'scale(1.1)',
                                        transition: 'transform 0.2s ease-in-out',
                                    }}
                                    _active={{
                                        bg: isActive(path) ? secondaryColor : '#6b46c1',
                                        transform: 'scale(0.95)',
                                    }}
                                    _focus={{
                                        outline: 'none',
                                    }}
                                    fontWeight={isActive(path) ? 'bold' : 'normal'}
                                    p={4}
                                >
                                    {label}
                                </Button>
                            ))}
                        </VStack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    );
}

export default Navigation;