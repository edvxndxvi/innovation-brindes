export default function ProductCardSkeleton() {
    return (
        <div className="animate-pulse flex flex-col gap-2 w-full select-none">
            <div>
                <div className="h-5 bg-gray-300 rounded w-3/4 mx-auto mb-1" />
                <div className="h-4 bg-gray-300 rounded w-1/2 mx-auto" />
            </div>
            <div className="border border-gray-300 rounded-xs">
                <div className="h-72 bg-gray-300 rounded-t-xs" />
                <div className="p-4">
                    <div className="h-10 bg-gray-300 rounded mb-4" />
                    <div className="h-4 bg-gray-300 rounded w-12 mb-2" />
                    <div className="grid grid-cols-3 gap-2 w-fit">
                        {[...Array(3)].map((_, index) => (
                            <div key={index} className="bg-gray-300 rounded-full w-4 h-4 mt-2 mb-1" />
                        ))}
                    </div>

                    <div className="flex flex-col items-end">
                        <div>
                            <div className="h-3 bg-gray-300 rounded w-16 mb-1" />
                            <div className="h-6 bg-gray-300 rounded w-20" />
                        </div>
                        <div className="h-3 bg-gray-300 rounded w-32 mt-1" />
                    </div>
                </div>
            </div>
            <div className="h-8 bg-gray-300 rounded-sm mt-2" />
        </div>
    );
}