'use client'

import { BottomPanelTab, BottomPanelTabs } from "@/libs/bottomPanelProps";
import { Flex } from "@radix-ui/themes";
import { usePathname } from "next/navigation";
import { BottomPanelItem } from "./BottomPanelItem";
export const BottomPanel = () => {
    const pathname  = usePathname();
    
    return (
        <>
            <Flex className="shrink-0 border-t-2 border-t-gray-700 bg-gray-300 flex" direction='row' justify={"center"}  width={'100%'} gap="2">
                <Flex width={'95%'} justify={'between'} >
                    {
                        BottomPanelTabs.map((item: BottomPanelTab) => 
                            <BottomPanelItem Icon={item.Icon} link={item.link} name={item.name} key={item.id} pathname={pathname} />
                        )
                    }        
                </Flex>
            </Flex>
        </>
    );
};