import { ProductRaw } from "./ProductData.type";

async function getData() {
    const res = await fetch("http://localhost:5000/products", {
        method: "GET",
    });
    return res.json();
}



const productData = async () => {
    const data: ProductRaw = await getData();
    console.log(data);
    

    return (
        <div>
            <h1 className="text-3xl font-bold tracking-wide text-blue-400">Product</h1>
      </div>
  )
}

export default productData
