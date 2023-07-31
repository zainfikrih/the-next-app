"use client"

import { useDisclosure } from '@mantine/hooks';
import { ActionIcon, AppShell, AppShellHeader, AppShellMain, AppShellNavbar, Burger, Center, Grid, GridCol, Group, Menu, MenuDivider, MenuDropdown, MenuItem, MenuLabel, MenuTarget, SimpleGrid, Stack, Text, rem, useComputedColorScheme, useMantineColorScheme, useMantineTheme } from '@mantine/core';
import React, { useTransition } from 'react';
import { MainLinks } from './main-link.component';
import Image from 'next/image';
import { IconLogout, IconMoon, IconSettings, IconSun, IconUser } from '@tabler/icons-react';
import useRouterClient from '../lib/clientRouter';
import cx from 'clsx'
import classes from '../styles/navbar.module.css'

export function TheNavbar({ children }: { children: React.ReactNode }) {
    const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
    const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);
    const theme = useMantineTheme()
    const { setColorScheme } = useMantineColorScheme();
    const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });
    const router = useRouterClient()

    return (
        <AppShell
            className={classes.backgroundScheme}
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
                                className={classes.backgroundIconScheme}
                                style={{
                                    padding: '6px',
                                    borderRadius: '30%',
                                }}
                                src={'/next.svg'}
                                alt='Next Logo'
                                width={40} height={40} />
                        </Center>
                        <Text ml={'md'}>
                            The Next App
                        </Text>
                    </Center>

                    <Center>
                        <ActionIcon
                            mr={'sm'}
                            variant="subtle"
                            size="md"
                            aria-label="theme"
                            color={theme.colors.cyan[7]}
                            onClick={() => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')}
                        >
                            <IconMoon className={cx(classes.dark)} size={20} />
                            <IconSun className={cx(classes.light)} size={20} />
                        </ActionIcon>
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
                                    onClick={() => {
                                        router.push('/profile')
                                    }}
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
                    </Center>

                </Group>
            </AppShellHeader>
            <AppShellNavbar>
                <MainLinks toggleMobile={toggleMobile} />
            </AppShellNavbar>
            <AppShellMain>
                {children}
            </AppShellMain>
        </AppShell>
    );
}