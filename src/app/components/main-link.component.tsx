"use client"

import React from 'react';
import { Text, Center, useMantineTheme, Button, Stack } from '@mantine/core';
import { IconNews, IconPlus, IconSlideshow } from '@tabler/icons-react';
import { useRouter } from 'next/navigation';

interface MainLinkProps {
    icon: React.ReactNode;
    color: string;
    label: string;
    href: string
}

function MainLink({ icon, color, label, href }: MainLinkProps) {
    const router = useRouter()
    const theme = useMantineTheme();

    return (
        <Button component='a' justify='flex-start' variant={'subtle'} color={color} href={href}>
            <Center>
                {icon}
                <Text pl={8} size="sm">{label}</Text>
            </Center>
        </Button>
    );
}

const data = [
    { icon: <IconPlus size={16} />, color: 'green', label: 'Home', href: '/' },
    { icon: <IconNews size={16} />, color: 'yellow', label: 'Profile', href: '/profile' }
];

export function MainLinks() {
    const links = data.map((link) => <MainLink {...link} key={link.label} />);
    return <Stack p={'sm'}>{links}</Stack>;
}