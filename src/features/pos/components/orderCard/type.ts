import { ButtonHTMLAttributes } from "react"

export type OrderCardProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    orderId?: string
    date?: string
    customerName?: string
    itemCount: number
}