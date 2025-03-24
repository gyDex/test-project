import { Text } from '@radix-ui/themes';
import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';
import { IconType } from 'react-icons';

type Props = {
    Icon : IconType,
    name: string,  
    link: string, 
    pathname: string,
}

export const BottomPanelItem: React.FC<Props> = ( { Icon, link, name, pathname } ) => {
    return (
        <Link href={link} className="flex  flex-col min-w-[40px] h-[80px] items-center justify-center gap-[10px] py-[10px] px-[10px] ">
            <Icon size={25} className={clsx({
                    ['text-blue-600'] : pathname === link
                }
            )} />

            <Text className={clsx(
                'text-[10px]',
                {
                    ['text-blue-600'] : pathname === link
                })}>
                { name }
            </Text>
        </Link>
    );
};