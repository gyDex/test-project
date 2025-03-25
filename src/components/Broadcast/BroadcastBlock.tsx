'use client'

import { Flex } from '@radix-ui/themes';
import clsx from 'clsx';
import React, { useState } from 'react';
import { CiStreamOn } from 'react-icons/ci';
import { BroadcastModal } from './BroadcastModal';

export const BroadcastBlock = () => {
    const [isActive, setActive] = useState(false);
    // const onClickButton = useCallback(() => {

    // },[])

    return (
        <>
        
        <Flex className="w-[100%] my-[25px]" justify={'center'}>
            <Flex className="bg-emerald-300 border-green-700 border-2 w-[95%] rounded-[10px] text-[15px] py-[5px] font-medium" justify={'center'} align={'center'} >
                Синхронизировать с Randomus
            </Flex>
        </Flex>


        <Flex className="w-[100%] flex-col" align={'center'}>
            <Flex className="w-[95%] py-[15px] flex-col gap-[15px] border-2 border-gray-500 rounded-[8px]" align={'center'}>
                <Flex  className="w-[100%]" justify={'center'} gap={'15px'} align={'center'}>
                    <CiStreamOn size={'25'} />
                    <span>
                        Трансляция 
                        <span className={clsx(
                            'ml-1.5 text-[18px] font-medium',
                            {
                                ['text-green-500']: isActive,
                                ['text-red-500']: isActive === false,
                            }
                        )}>
                            {
                                isActive ? 'активна' : 'неактивна'
                            }    
                        </span>
                    </span>
                </Flex>

                
                {/* <button onClick={() => setActive(prev => !prev)} className="w-[100%] max-w-[200px] text-[15px] cursor-pointer border-2 border-gray-300 bg-gray-200 text-gray-600 font-medium rounded-[8px]">
                    Запустить
                </button> */}

                <BroadcastModal callback={() => setActive(prev => !prev)} />
            </Flex>

            <hr className="my-[20px] w-[95%] border-gray-400 border-[1.5px]" />
        </Flex>
        </>
    );
};