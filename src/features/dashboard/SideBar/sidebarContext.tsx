import React, { createContext, useContext, useState, ReactNode } from 'react';

interface SidebarContextType {
    isCollapsed: boolean;
    toggleSidebar: () => void;
    isProductExpanded: boolean;
    toggleProductExpansion: () => void;
    isReportExpanded: boolean;
    toggleReportExpansion: () => void;
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export function SidebarProvider({ children }: { children: ReactNode }) {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [isProductExpanded, setIsProductExpanded] = useState(false);
    const [isReportExpanded, setIsReportExpanded] = useState(false);

    const toggleSidebar = () => {
        setIsCollapsed(prev => !prev);
    };

    const toggleProductExpansion = () => {
        setIsProductExpanded(prev => !prev);
    };

    const toggleReportExpansion = () => {
        setIsReportExpanded(prev => !prev);
    };

    return (
        <SidebarContext.Provider value={{ isCollapsed, toggleSidebar, isProductExpanded, toggleProductExpansion, isReportExpanded, toggleReportExpansion }}>
            {children}
        </SidebarContext.Provider>
    );
}

export function useSidebar() {
    const context = useContext(SidebarContext);
    if (context === undefined) {
        throw new Error('useSidebar must be used within a SidebarProvider');
    }
    return context;
}
