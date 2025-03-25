import { Flex } from "@radix-ui/themes";
import Image from "next/image";
import React from "react";
import { StatisticsItem } from "./StatisticsItem";

export const StatisticsBlock = () => {
    return (

        <Flex className="w-[100%] flex-col" align={'center'}>
            <StatisticsItem imageUrl="/images/imageDefault.jpeg" title="Всего пользователей" data="1 200 000"/>
            <StatisticsItem imageUrl="/images/imageDefault.jpeg" title="Заработано на билетах" data="1 200 000 руб."/>

            <hr className="my-[20px] w-[95%] border-gray-400 border-[1.5px]" />
        </Flex>
    );
};