import { HTMLAttributes } from "react";

export type HeaderProps = HTMLAttributes<HTMLHeadElement> & {
    cashierName?: string
    date?: string
    cashierStatus? : string
}