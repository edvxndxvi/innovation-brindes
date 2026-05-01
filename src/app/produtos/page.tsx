
import ProductGrid from "@/src/components/products/ProductGrid";
import Header from "@/src/components/section/Header";

export default function Produtos() {
    return (
        <div className="w-full h-screen">
            <Header />
            <div className="container py-4">
                <ProductGrid />
              
            </div>
        </div>
    );
}