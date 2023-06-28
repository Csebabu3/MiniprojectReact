import React from "react";
import { AiOutlineHome,AiFillContacts,AiFillAlert,AiOutlineContacts} from "react-icons/ai";
export const SidebarData = [
    {
        title:"Home",
        icon:<AiOutlineHome />,
        Link:"/Home"
    },
    {
        title:"Faculty",
        icon:<AiFillContacts />,
        Link:"/Faculty"
    },
    {
        title:"Student",
        icon:<AiFillAlert />,
        Link:"/Student"
    },
    {
        title:"Contact",
        icon:<AiOutlineContacts />,
        Link:"/Contact"
    }

]