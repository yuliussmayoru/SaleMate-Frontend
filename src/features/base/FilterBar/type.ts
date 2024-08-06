export interface FilterField {
    name: string;
    label: string;
    type: 'select' | 'text' | 'date';
    options?: string[];
}

export interface FilterBarProps {
    filtersConfig: FilterField[];
    onFilter: (filters: { [key: string]: string }) => void;
}