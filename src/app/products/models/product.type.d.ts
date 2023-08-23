// export interface {
//     https://fakestoreapi.com/products

//     https://publicapis.dev/category/test-data
// rapid api 

// https://app.quicktype.io/?l=ts
// }

export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: Rating;
}

export interface Rating {
    rate: number;
    count: number;
}
