import Link from 'next/link';
import { useRouter } from 'next/router';
import { Button } from '../../base/Button'
import Image from 'next/image';
import { useSidebar } from './sidebarContext';

export default function SideBar() {
    const router = useRouter();
    const { pathname } = router;
    const { isCollapsed, toggleSidebar } = useSidebar();

    const getNavLinkClass = (route: string) => (
        pathname === route ? 'text-purple-1 bg-purple-3' : 'hover:text-purple-1 hover:bg-white text-gray-600'
    );

    const getNavIconClass = (route: string) => (
        pathname === route ? 'stroke-purple-1' : 'stroke-gray-600 hover:stroke-purple-1'
    );

    return (
        <div 
            className={`fixed top-0 left-0 h-full bg-gray-6 transition-all duration-300
            ${ isCollapsed ? 'w-[100px]' : 'w-[300px]' }`}
        >
            {/* TOP SIDEBAR */}
            <Link
                href={'/dashboard'}
            >
                <div 
                    className={`w-full h-[100px] bg-purple-2 p-6 flex gap-2 items-center 
                    ${ isCollapsed ? 'justify-start' : 'justify-start' }`}
                >
                        <Image
                            src="/salemate.svg"
                            alt="salemate logo"
                            width="48"
                            height="48"
                        />
                        {!isCollapsed && (
                            <h1 className='text-3xl font-bold text-white'>
                                Salemate
                            </h1>
                        )}
                </div>
            </Link>

            {/* SIDEBAR BUTTON */}
            <button
                className={`absolute top-[50px] transform -translate-y-1/2 p-2 bg-purple-2 drop-shadow-xl font-black text-white rounded transition-transform duration-300 hover:brightness-110
                ${ isCollapsed ? 'translate-x-[85px]' : 'translate-x-[285px]' }`}
                onClick={toggleSidebar}
            >
                {isCollapsed ? '>' : '<'}
            </button>

            {/* SIDEBAR NAVIGATION */}
            <div className={`text-xl p-6 h-full w-full flex flex-col items-center justify-start}`}>
                {/* HOME */}
                <h1 className='font-bold text-3xl text-gray-2 pb-4'>
                    {isCollapsed ? <div className='opacity-0'>0</div> : 'Home'}
                </h1>

                <Link href='/dashboard' className='w-full'>
                    <div className={`p-2 flex items-center gap-2 w-auto rounded-xl transition-transform duration-1000 ${getNavLinkClass('/dashboard')} ${getNavIconClass('/dashboard')}`}>
                        <div className='p-1 items-center'>
                            <svg 
                                width="28" 
                                height="24" 
                                viewBox="0 0 24 24" 
                                fill="none" 
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path 
                                    d="M2.25 12L11.204 3.04501C11.644 2.60601 12.356 2.60601 12.795 3.04501L21.75 12M4.5 9.75001V19.875C4.5 20.496 5.004 21 5.625 21H9.75V16.125C9.75 15.504 10.254 15 10.875 15H13.125C13.746 15 14.25 15.504 14.25 16.125V21H18.375C18.996 21 19.5 20.496 19.5 19.875V9.75001M8.25 21H16.5" 
                                    stroke="currentColor"
                                    strokeWidth="1.5" 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round"/>
                            </svg>
                        </div>
                        {!isCollapsed && <span>Dashboard</span>}
                    </div>
                </Link>

                <Link href='/dashboard/product' className='w-full'>
                    <div className={`p-2 flex items-center gap-2 w-auto rounded-xl transition-transform duration-1000 ${getNavLinkClass('/dashboard/product')} ${getNavIconClass('/dashboard/product')}`}>
                        <div className='p-1 items-center'>
                            <svg 
                                width="28" 
                                height="24" 
                                viewBox="0 0 24 24" 
                                fill="none" 
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path 
                                    d="M20.25 7.5L19.625 18.132C19.5913 18.705 19.3399 19.2436 18.9222 19.6373C18.5045 20.031 17.952 20.2502 17.378 20.25H6.622C6.04796 20.2502 5.49555 20.031 5.07783 19.6373C4.66011 19.2436 4.40868 18.705 4.375 18.132L3.75 7.5M10 11.25H14M3.375 7.5H20.625C21.246 7.5 21.75 6.996 21.75 6.375V4.875C21.75 4.254 21.246 3.75 20.625 3.75H3.375C2.754 3.75 2.25 4.254 2.25 4.875V6.375C2.25 6.996 2.754 7.5 3.375 7.5Z" 
                                    stroke="currentColor" 
                                    stroke-width="1.5" 
                                    stroke-linecap="round" 
                                    stroke-linejoin="round"
                                />
                            </svg>
                        </div>
                        {!isCollapsed && <span>Product</span>}
                    </div>
                </Link>

            </div>
        </div>
    );
}
