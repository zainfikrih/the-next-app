import React from 'react';
import { Text, Center, Button, Stack } from '@mantine/core';
import { IconNews, IconPlus } from '@tabler/icons-react';
import Link from 'next/link';

interface MainLinkProps {
    icon: React.ReactNode;
    color: string;
    label: string;
    href: string
    toggleMobile: () => void
}

function MainLink({ icon, color, label, href, toggleMobile }: MainLinkProps) {
    return (
        <Button component={Link} justify='flex-start' variant={'subtle'} color={color} w={'100%'} href={href} onClick={toggleMobile}>
            <Center>
                {icon}
                <Text pl={8} size="sm">{label}</Text>
            </Center>
        </Button>
    );
}

const data = [
    { icon: <IconPlus size={16} />, color: 'green', label: 'Home', href: '/home' },
    { icon: <IconNews size={16} />, color: 'yellow', label: 'Profile', href: '/home/profile' }
];

export function MainLinks({ toggleMobile }: { toggleMobile: () => void }) {
    const links = data.map((link) => <MainLink {...link} toggleMobile={toggleMobile} key={link.label} />);
    return <Stack p={'sm'}>{links}</Stack>;
}