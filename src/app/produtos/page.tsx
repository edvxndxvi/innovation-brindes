import ProductGrid from "@/src/app/produtos/_components.tsx/ProductGrid";
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