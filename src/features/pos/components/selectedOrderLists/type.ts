import { ButtonHTMLAttributes } from "react"

export type selectedListProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    quantity?: number
    productName?: string
    price?: number
}