"use client"

import { useDisclosure } from '@mantine/hooks';
import { ActionIcon, AppShell, AppShellHeader, AppShellMain, AppShellNavbar, Burger, Center, Grid, GridCol, Group, Menu, MenuDivider, MenuDropdown, MenuItem, MenuLabel, MenuTarget, SimpleGrid, Stack, Text, rem, useMantineTheme } from '@mantine/core';
import React from 'react';
import { MainLinks } from './main-link.component';
import Image from 'next/image';
import { IconLogout, IconSettings, IconUser } from '@tabler/icons-react';

export function TheNavbar({ children }: { children: React.ReactNode }) {
    const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
    const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);
    const theme = useMantineTheme()

    return (
        <AppShell
            padding={'md'}
            header={{ height: 60 }}
            navbar={{
                width: 300,
                breakpoint: 'sm',
                collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
            }}
        >
            <AppShellHeader>
                <Group h={'100%'} px={20} justify='space-between'>
                    <Center inline>
                        <Burger opened={mobileOpened} onClick={toggleMobile} hiddenFrom="sm" size="sm"
                            color={theme.colors.cyan[7]} />
                        <Burger opened={desktopOpened} onClick={toggleDesktop} visibleFrom="sm" size="sm"
                            color={theme.colors.cyan[7]} />
                        <Center visibleFrom='sm' ml={'lg'}>
                            <Image
                                style={{
                                    padding: '6px',
                                    backgroundColor: 'white',
                                    borderRadius: '30%'
                                }}
                                src={'/next.svg'}
                                alt='Next Logo'
                                width={40} height={40} />
                        </Center>
                        <Text ml={'md'}>
                            The Next App
                        </Text>
                    </Center>

                    <Menu shadow="md" width={200}>
                        <MenuTarget>
                            <ActionIcon
                                variant="subtle"
                                size="md"
                                aria-label="logout"
                                color={theme.colors.cyan[7]}
                            >
                                <IconSettings size={20} />
                            </ActionIcon>
                        </MenuTarget>

                        <MenuDropdown>
                            <MenuLabel>Hallo</MenuLabel>
                            <MenuItem
                                component='a'
                                href='/profile'
                                leftSection={<IconUser style={{ width: rem(14), height: rem(14) }} />}>
                                Profile
                            </MenuItem>
                            <MenuDivider />
                            <MenuLabel>Account</MenuLabel>
                            <MenuItem
                                color="red"
                                leftSection={<IconLogout style={{ width: rem(14), height: rem(14) }} />}>
                                Logout
                            </MenuItem>
                        </MenuDropdown>
                    </Menu>
                </Group>
            </AppShellHeader>
            <AppShellNavbar>
                <MainLinks />
            </AppShellNavbar>
            <AppShellMain>
                {children}
            </AppShellMain>
        </AppShell>
    );
}