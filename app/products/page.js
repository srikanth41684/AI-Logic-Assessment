"use client"

import ProductCard from "@/components/ProductCard";
import { useEffect, useState } from "react";


export default function ProductsPage() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchHanlder()
    }, [])

    const fetchHanlder = async () => {
        try {
            const rex = await fetch('/api/products');
            const result = await rex?.json();

            console.log("red", result);
            if(result?.products) {
                setProducts(result?.products || [])
            }
            
        } catch {
            console.log("fdsfds", );
            
        }
    }
    return (
        <div>
            {products?.map((res, index) => (
                <div key={index}>
                    <ProductCard product={res} />
                </div>
            ))}
        </div>
    )
}