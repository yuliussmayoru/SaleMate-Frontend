import { HTMLAttributes } from "react"

export type selectedListProps = HTMLAttributes<HTMLDivElement> & {
    quantity?: number
    productName?: string
    price?: number
    onRemove: () => void;
}