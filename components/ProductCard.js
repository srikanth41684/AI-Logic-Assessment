
export default function ProductCard({product}) {
    return (
        <div className="w-[200px] h-[300px] bg-gray-500">
            <img src={product?.thumbnail} alt="image" />
            <div className="flex justify-between">
            <div>{product?.title}</div>
            <div>₹ {product?.price}</div>
            </div>
            <button className="">Add to Cart</button>
        </div>
    )
}