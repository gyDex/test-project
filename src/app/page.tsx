import { BroadcastBlock, StatisticsBlock } from "@/components";
import { Button, Flex } from "@radix-ui/themes";
import * as React from "react";
import { CiStreamOn } from "react-icons/ci";

export default function Home() {
  

  return (
    <>
      <h1 className="font-semibold text-[20px] w-full flex justify-center items-center py-[15px]">
          Главная
      </h1>

      <Flex className="w-[100%]" justify={'center'}>
        <div className="border-2 border-gray-300 bg-gray-200 py-2 rounded-[20px] h-[200px] w-[95%] flex flex-col items-center">
            <h2 className=" text-[15px]  font-semibold text-center grow">
                Актуальный розыгрыш
            </h2>

            <Flex className="w-[100%]" justify={'center'} flexShrink={'0'}>
              <button className="w-[100%] max-w-[200px] cursor-pointer border-2 border-gray-500 text-gray-500 rounded-[8px]">
                Выбрать
              </button>
            </Flex>
        </div> 
      </Flex>

      <BroadcastBlock />

      <StatisticsBlock />
    </>
  );
}
