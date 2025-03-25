import { Flex } from "@radix-ui/themes";
import Image from "next/image";
import React from "react";

type Props = {
    imageUrl: string,
    data: string,
    title: string,
}

export const StatisticsItem: React.FC<Props> = ( {data, imageUrl='/images/imageDefault.jpeg',title} ) => {
    return (

        <Flex className="w-[100%]" justify={'center'}>
            <Flex className="w-[95%] py-[15px] mt-[50px] px-[25px] gap-[15px] border-2 border-gray-500 rounded-[8px] " align={'center'}>
                <Image className="rounded-full h-[50px] w-[50px] object-cover border-2 border-gray-500" src={imageUrl} width={100} height={100}  alt="image" />

                <Flex className="w-[100%] flex-col " gap={'10px'} align={'center'}>
                    <span className="font-normal">
                        {title}
                    </span>

                    <span className="font-semibold text-[25px]">
                        {data}
                    </span>
                </Flex>
            </Flex>
        </Flex>
        
    );
};