export default function ProductCardSkeleton() {
    return (
        
        <div className="w-full h-80 bg-gray-200 animate-pulse rounded-lg">
            <div className="w-full h-48 bg-gray-300 mb-4"></div>
            <div className="w-3/4 h-6 bg-gray-300 mb-2"></div>
            <div className="w-1/2 h-6 bg-gray-300"></div>
        </div>
    );
}