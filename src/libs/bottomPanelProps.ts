import { IconType } from "react-icons"
import { FaGift, FaHome } from "react-icons/fa"
import { HiUsers } from "react-icons/hi"
import { IoIosSettings } from "react-icons/io"
import { MdHistory } from "react-icons/md"

export const BottomPanelTabs = [
    {
        id: 0,
        Icon: FaHome,
        name: 'Главная',
        link: '/'
    },
    {
        id: 1,
        Icon: HiUsers,
        name: 'Пользователи',
        link: '/users'
    },
    {
        id: 2,
        Icon: FaGift,
        name: 'Розыгрыши',
        link: '/gifts'
    },
    {
        id: 3,
        Icon: MdHistory,
        name: 'История',
        link: '/history'
    },
    {
        id: 4,
        Icon: IoIosSettings,
        name: 'Настройки',
        link: '/settings'
    }
] as BottomPanelTab[]

export type BottomPanelTab = {
    id?: number;
    Icon : IconType,
    name: string,  
    link: string, 
}