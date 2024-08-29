import React from "react";
import { Button, Card, Input } from "../../../base"

export function InputCustomerModal() {
    return(
        <Card>
            <p>Customer Data</p>
            <form action="">
                <Input 
                    label="Customer Name"
                    placeholder="Enter customer name"
                    name="customerName"
                />

                <Input 
                    label="Customer E-mail"
                    placeholder="Enter customer e-mail"
                    name="customerEmail"
                />

                <div>
                    <Button className="bg-[#9A97DA] rounded-3xl mr-8 text-[#9A97DA] text-xl w-24">Cancel</Button>
                    <Button className="bg-[#9A97DA] rounded-3xl mr-8 text-[#9A97DA] text-xl w-24">Save</Button>
                </div>
            </form>
    
        </Card>
    )
}