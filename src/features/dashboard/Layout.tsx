import SideBar from '../dashboard/SideBar'
import { ReactNode, useState } from "react";
import { useSidebar } from './SideBar/sidebarContext';

interface LayoutProps {
    children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    const { isCollapsed } = useSidebar();

    return (
        <div className='flex'>
            <SideBar />
            <main
                className={`flex-1 p-[20px] transition-all duration-700 ${isCollapsed ? 'ml-[100px]' : 'ml-[300px]'}`}
            >
                {children}
            </main>
        </div>
    )
}
