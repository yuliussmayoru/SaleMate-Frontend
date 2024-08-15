export interface Staff {
    user_id: string,
    user_name: string,
    email: string,
    password: string,
    role: string,
    pin: string,
    created_at: string,
    updated_at: string,
    isDelete: boolean,
}

export interface ProductCategory {
    id: string,
    store: string,
    storeId: string,
    category: string,
    tax: string,
}

export interface Product {
    id: string,
    storeId: string,
    category: string,
    productName: string,
    price: string,
    qty: number,
    note: string,
}

export interface DriverPartner {
    id: string,
    type: string,
    name: string,
    benefit: string,
}

export interface Payment {
    payment_id: any;
    payment_type: string;
    payment_name: string;
    created_at: string,
    updated_at: string,
    isDelete: boolean,
}

export interface Transaction {
    id: string,
    storeId: string,
    receipt: string,
    date: string,
    subtotal: number,
    service: number,
    tax: number,
    completion: 'complete' | 'not complete',
    discount: number,
    grandTotal: number,
};

export interface PaymentReport {
    id: string,
    storeId: string,
    receipt: string,
    date: string,
    grandTotal: number,
    method: string,
    type: string,
}

export interface OpenClose {
    id: string,
    storeId: string,
    date: string,
    openBy: string,
    closeBy: string,
    billOfQuantity: number,
    grandTotal: number,
}

export interface DriverPartnerReport {
    id: string,
    storeId: string,
    date: string,
    receipt: string,
    driverPartner: string,
    benefit: number,
    grandTotal: number,
}

// export const dummyStaffs: Staff[] = [
//     {
//         id: "adm001",
//         store_id: 'BDG01',
//         staff_name: "staff satu",
//         staff_email: "staff1@email.com",
//         staff_password: "staff1",
//         role: "admin",
//         pin: "000001",
//         created_at: "2024-1-1",
//         updated_at: "2024-1-1",
//         isDelete: false,
//     },
//     {
//         id: "adm002",
//         store_id: 'BDG01',
//         staff_name: "staff dua",
//         staff_email: "staff2@email.com",
//         staff_password: "staff2",
//         role: "admin",
//         pin: "000002",
//         created_at: "2024-1-1",
//         updated_at: "2024-1-1",
//         isDelete: false,
//     },
//     {
//         id: "adm003",
//         store_id: 'BDG01',
//         staff_name: "staff tiga",
//         staff_email: "staff3@email.com",
//         staff_password: "staff3",
//         role: "admin",
//         pin: "000003",
//         created_at: "2024-1-1",
//         updated_at: "2024-1-1",
//         isDelete: false,
//     },
//     {
//         id: "adm004",
//         store_id: 'BDG01',
//         staff_name: "staff empat",
//         staff_email: "staff4@email.com",
//         staff_password: "staff4",
//         role: "admin",
//         pin: "000004",
//         created_at: "2024-1-1",
//         updated_at: "2024-1-1",
//         isDelete: false,
//     },
//     {
//         id: "adm005",
//         store_id: 'BDG01',
//         staff_name: "staff lima",
//         staff_email: "staff5@email.com",
//         staff_password: "staff5",
//         role: "admin",
//         pin: "000005",
//         created_at: "2024-1-1",
//         updated_at: "2024-1-1",
//         isDelete: false,
//     },
//     {
//         id: "adm006",
//         store_id: 'BDG01',
//         staff_name: "staff enam",
//         staff_email: "staff6@email.com",
//         staff_password: "staff6",
//         role: "admin",
//         pin: "000006",
//         created_at: "2024-1-1",
//         updated_at: "2024-1-1",
//         isDelete: false,
//     },
//     {
//         id: "adm007",
//         store_id: 'BDG01',
//         staff_name: "staff tujuh",
//         staff_email: "staff7@email.com",
//         staff_password: "staff7",
//         role: "admin",
//         pin: "000007",
//         created_at: "2024-1-1",
//         updated_at: "2024-1-1",
//         isDelete: false,
//     },
//     {
//         id: "adm008",
//         store_id: 'BDG01',
//         staff_name: "staff delapan",
//         staff_email: "staff8@email.com",
//         staff_password: "staff8",
//         role: "admin",
//         pin: "000008",
//         created_at: "2024-1-1",
//         updated_at: "2024-1-1",
//         isDelete: false,
//     },
//     {
//         id: "adm009",
//         store_id: 'BDG01',
//         staff_name: "staff sembilan",
//         staff_email: "staff9@email.com",
//         staff_password: "staff9",
//         role: "admin",
//         pin: "000009",
//         created_at: "2024-1-1",
//         updated_at: "2024-1-1",
//         isDelete: false,
//     },
//     {
//         id: "adm010",
//         store_id: 'BDG01',
//         staff_name: "staff sepuluh",
//         staff_email: "staff10@email.com",
//         staff_password: "staff10",
//         role: "admin",
//         pin: "000010",
//         created_at: "2024-1-1",
//         updated_at: "2024-1-1",
//         isDelete: false,
//     },
//     {
//         id: "adm011",
//         store_id: 'BDG01',
//         staff_name: "staff sebelas",
//         staff_email: "staff11@email.com",
//         staff_password: "staff11",
//         role: "admin",
//         pin: "000011",
//         created_at: "2024-1-1",
//         updated_at: "2024-1-1",
//         isDelete: false,
//     },
// ]

export const dummyProduct: Product[] = [
    {
        id: "1",
        storeId: "BGD01",
        category: "Activewears",
        productName: "Black Hoodie - Female",
        price: "700,000",
        qty: 2,
        note: "All Size",
    },
    {
        id: "2",
        storeId: "BGD01",
        category: "Activewears",
        productName: "Light Gray Hoodie - Female",
        price: "720,000",
        qty: 2,
        note: "All Size",
    },
    {
        id: "3",
        storeId: "BGD01",
        category: "Activewears",
        productName: "Black Hoodie - Male",
        price: "720,000",
        qty: 2,
        note: "All Size",
    },
    {
        id: "4",
        storeId: "BGD01",
        category: "Activewears",
        productName: "White Hoodie - Male",
        price: "720,000",
        qty: 2,
        note: "All Size",
    },
    {
        id: "5",
        storeId: "BGD01",
        category: "Activewears",
        productName: "Black DriFit Workout Tops - Female",
        price: "300,000",
        qty: 1,
        note: "Size S",
    },
    {
        id: "6",
        storeId: "BGD01",
        category: "Activewears",
        productName: "Black DriFit Workout Tops - Female",
        price: "300,000",
        qty: 1,
        note: "Size M",
    },
    {
        id: "7",
        storeId: "BGD01",
        category: "Activewears",
        productName: "Black DriFit Workout Tops - Female",
        price: "300,000",
        qty: 1,
        note: "Size L",
    },
    {
        id: "8",
        storeId: "BGD01",
        category: "Activewears",
        productName: "Black DriFit Workout Tops - Male",
        price: "330,000",
        qty: 1,
        note: "Size M",
    },
    {
        id: "9",
        storeId: "BGD01",
        category: "Activewears",
        productName: "Black DriFit Workout Tops - Male",
        price: "330,000",
        qty: 1,
        note: "Size L",
    },
    {
        id: "10",
        storeId: "BGD01",
        category: "Activewears",
        productName: "Black DriFit Workout Tops - Male",
        price: "330,000",
        qty: 1,
        note: "Size XL",
    }
]

export const dummyProductCategory: ProductCategory[] = [
    {
        id: "1",
        store: "Dago, Bandung",
        storeId: "BDG01",
        category: "Activewears",
        tax: "10",
    },
    {
        id: "2",
        store: "Dago, Bandung",
        storeId: "BDG01",
        category: "Bottoms",
        tax: "10",
    },
    {
        id: "3",
        store: "Dago, Bandung",
        storeId: "BDG01",
        category: "Denim Bottoms",
        tax: "10",
    },
    {
        id: "4",
        store: "Dago, Bandung",
        storeId: "BDG01",
        category: "Denim Jackets",
        tax: "10",
    },
    {
        id: "5",
        store: "Dago, Bandung",
        storeId: "BDG01",
        category: "Denim Tops",
        tax: "10",
    },
    {
        id: "6",
        store: "Dago, Bandung",
        storeId: "BDG01",
        category: "Jackets",
        tax: "10",
    },
    {
        id: "7",
        store: "Dago, Bandung",
        storeId: "BDG01",
        category: "Denim Bottoms",
        tax: "10",
    },
    {
        id: "8",
        store: "Dago, Bandung",
        storeId: "BDG01",
        category: "Denim Jackets",
        tax: "10",
    },
    {
        id: "9",
        store: "Dago, Bandung",
        storeId: "BDG01",
        category: "Denim Tops",
        tax: "10",
    },
    {
        id: "10",
        store: "Dago, Bandung",
        storeId: "BDG01",
        category: "Jackets",
        tax: "10",
    }
]

export const dummyDriverPartners: DriverPartner[] = [
    {
        id: "1",
        type: "Online Delivery",
        name: "Gojek",
        benefit: "20",
    },
    {
        id: "2",
        type: "Online Delivery",
        name: "Grab",
        benefit: "20",
    },
    {
        id: "3",
        type: "Online Delivery",
        name: "Shopee",
        benefit: "20",
    }
]

// export const dummyPayments: Payment[] = [
//     {
//         id: "1",
//         type: "Bank",
//         name: "BRI",
//     },
//     {
//         id: "2",
//         type: "Bank",
//         name: "BCA",
//     },
//     {
//         id: "3",
//         type: "Bank",
//         name: "Mandiri",
//     },
//     {
//         id: "4",
//         type: "Bank",
//         name: "BNI",
//     },
//     {
//         id: "5",
//         type: "Bank",
//         name: "BTN",
//     },
//     {
//         id: "6",
//         type: "Bank",
//         name: "Bank Danamon",
//     },
//     {
//         id: "7",
//         type: "Bank",
//         name: "OCBC NISP",
//     },
//     {
//         id: "8",
//         type: "E-Payment",
//         name: "OVO",
//     },
//     {
//         id: "9",
//         type: "E-Payment",
//         name: "Gopay",
//     },
//     {
//         id: "10",
//         type: "E-Payment",
//         name: "ShopeePay",
//     },
//     {
//         id: "11",
//         type: "Bank",
//         name: "Jenius",
//     },
//     {
//         id: "12",
//         type: "Bank",
//         name: "Bank Jago",
//     },
//     {
//         id: "13",
//         type: "Bank",
//         name: "Bank DKI",
//     },
// ]

export const transactions: Transaction[] = [
    { 
        id: '1', 
        storeId: 'Store 1', 
        receipt: '001', 
        date: '2024-07-01', 
        subtotal: 100000, 
        service: 10000, 
        tax: 10000, 
        completion: 'complete', 
        discount: 20000, 
        grandTotal: 300000 
    },
    { 
        id: '2', 
        storeId: 'Store 2', 
        receipt: '002', 
        date: '2023-07-02', 
        subtotal: 150000, 
        service: 11000, 
        tax: 12000, 
        completion: 'complete', 
        discount: 21000, 
        grandTotal: 450000
    },
    { 
        id: '3', 
        storeId: 'Store 1', 
        receipt: '001', 
        date: '2024-07-01', 
        subtotal: 100000, 
        service: 10000, 
        tax: 10000, 
        completion: 'complete', 
        discount: 20000, 
        grandTotal: 300000 
    },
    { 
        id: '4', 
        storeId: 'Store 2', 
        receipt: '002', 
        date: '2023-07-02', 
        subtotal: 150000, 
        service: 11000, 
        tax: 12000, 
        completion: 'complete', 
        discount: 21000, 
        grandTotal: 450000
    },
    { 
        id: '1', 
        storeId: 'Store 1', 
        receipt: '001', 
        date: '2024-07-01', 
        subtotal: 100000, 
        service: 10000, 
        tax: 10000, 
        completion: 'complete', 
        discount: 20000, 
        grandTotal: 300000 
    },
    { 
        id: '2', 
        storeId: 'Store 2', 
        receipt: '002', 
        date: '2023-07-02', 
        subtotal: 150000, 
        service: 11000, 
        tax: 12000, 
        completion: 'complete', 
        discount: 21000, 
        grandTotal: 450000
    },
    { 
        id: '3', 
        storeId: 'Store 1', 
        receipt: '001', 
        date: '2024-07-01', 
        subtotal: 100000, 
        service: 10000, 
        tax: 10000, 
        completion: 'complete', 
        discount: 20000, 
        grandTotal: 300000 
    },
    { 
        id: '4', 
        storeId: 'Store 2', 
        receipt: '002', 
        date: '2023-07-02', 
        subtotal: 150000, 
        service: 11000, 
        tax: 12000, 
        completion: 'complete', 
        discount: 21000, 
        grandTotal: 450000
    },
    { 
        id: '1', 
        storeId: 'Store 1', 
        receipt: '001', 
        date: '2024-07-01', 
        subtotal: 100000, 
        service: 10000, 
        tax: 10000, 
        completion: 'complete', 
        discount: 20000, 
        grandTotal: 300000 
    },
    { 
        id: '2', 
        storeId: 'Store 2', 
        receipt: '002', 
        date: '2023-07-02', 
        subtotal: 150000, 
        service: 11000, 
        tax: 12000, 
        completion: 'complete', 
        discount: 21000, 
        grandTotal: 450000
    },
    { 
        id: '3', 
        storeId: 'Store 1', 
        receipt: '001', 
        date: '2024-07-01', 
        subtotal: 100000, 
        service: 10000, 
        tax: 10000, 
        completion: 'complete', 
        discount: 20000, 
        grandTotal: 300000 
    },
    { 
        id: '4', 
        storeId: 'Store 2', 
        receipt: '002', 
        date: '2023-07-02', 
        subtotal: 150000, 
        service: 11000, 
        tax: 12000, 
        completion: 'complete', 
        discount: 21000, 
        grandTotal: 450000
    },
];

export const payments: PaymentReport[] = [
    { 
        id: '1', 
        storeId: 'Store 1', 
        receipt: '001', 
        date: '2024-07-01',
        grandTotal: 300000,
        method: 'Cash',
        type: 'Cash'
    },
    { 
        id: '2', 
        storeId: 'Store 2', 
        receipt: '002', 
        date: '2024-08-01',
        grandTotal: 500000,
        method: 'Debit',
        type: 'Bank'
    },
    { 
        id: '3', 
        storeId: 'Store 1', 
        receipt: '003', 
        date: '2024-06-01',
        grandTotal: 500000,
        method: 'QRIS',
        type: 'Bank'
    },
    { 
        id: '4', 
        storeId: 'Store 2', 
        receipt: '004', 
        date: '2024-10-01',
        grandTotal: 500000,
        method: 'Debit',
        type: 'Bank'
    },
];

export const openCloses: OpenClose[] = [
    {
        id: '1',
        storeId: 'Store 1',
        date: '2024-07-01',
        openBy: 'Mutia',
        closeBy: 'Mutia',
        billOfQuantity: 1,
        grandTotal: 3000000,
    },
    {
        id: '1',
        storeId: 'Store 2',
        date: '2024-08-01',
        openBy: 'Mutia',
        closeBy: 'Tuti',
        billOfQuantity: 1,
        grandTotal: 4500000,
    },
    {
        id: '1',
        storeId: 'Store 3',
        date: '2024-06-01',
        openBy: 'Vivi',
        closeBy: 'Mutia',
        billOfQuantity: 1,
        grandTotal: 4500000,
    },
];

export const driverPartners: DriverPartnerReport[] = [
    {
        id: '1',
        storeId: 'Store 1',
        date: '2024-07-01',
        receipt: '001',
        driverPartner: 'gojek',
        benefit: 30000,
        grandTotal: 3000000,
    },
    {
        id: '1',
        storeId: 'Store 1',
        date: '2024-09-01',
        receipt: '002',
        driverPartner: 'shopee',
        benefit: 20000,
        grandTotal: 6000000,
    },
    {
        id: '1',
        storeId: 'Store 1',
        date: '2024-08-01',
        receipt: '001',
        driverPartner: 'grab',
        benefit: 50000,
        grandTotal: 3500000,
    },
]