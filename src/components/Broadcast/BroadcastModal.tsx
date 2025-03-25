import * as React from "react";
import { Dialog } from "radix-ui";
import './BroadcastModal.scss'
import { RxCross2 } from "react-icons/rx";
import { Flex } from "@radix-ui/themes";

type Props = {
    callback: () => void;
}

export const BroadcastModal: React.FC<Props> = ({  callback }) => {
    return (
        <>
        	<Dialog.Root>
                <Dialog.Trigger asChild>
                    <button className="w-[100%] max-w-[200px] text-[15px] cursor-pointer border-2 border-gray-300 bg-gray-200 text-gray-600 font-medium rounded-[8px]">
                        Запустить
                    </button>
                </Dialog.Trigger>
                <Dialog.Portal>
                    <Dialog.Overlay className="DialogOverlay" />
                    <Dialog.Content className="DialogContent">
                        <Flex className="relative mb-[50px]">
                            <Dialog.Title className="w-full flex justify-center text-black font-semibold text-[20px]">Запустить трансляцию</Dialog.Title>
                            <Dialog.Close className="absolute" asChild>
                                <button className="IconButton" aria-label="Close">
                                    <RxCross2 color="black" size={30} />
                                </button>
                            </Dialog.Close>
                        </Flex>
                        
                        <fieldset className="flex flex-col">
                            <input className="w-full p-[5px] rounded-[10px] text-gray-500 focus-within:outline-none border-2 border-gray-400 all" id="name" defaultValue="" placeholder="Ссылка на трансляцию" />
                        </fieldset>

                        <div
                            className="w-full flex justify-center mt-[15px]"
                        >
                            <Dialog.Close className="w-full" asChild>
                                <button onClick={callback} className="w-[100%] text-[15px] cursor-pointer py-[5px] border-2 border-gray-300 bg-gray-200 text-gray-600 font-medium rounded-[8px]">
                                    Запустить
                                </button>
                            </Dialog.Close>
                        </div>
                        
                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog.Root>
        </>
    );
};