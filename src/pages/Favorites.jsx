import { usePuppy } from '../components/context/PuppyContext';


const Favorites = () => {
    const { favorites } = usePuppy();

    return (
        // Favorites page
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-8 text-center">My Favorite Puppies</h1>
            {/* If no favorites, show message */}
            {favorites.length === 0 ? (
                <p className="text-center text-gray-500">No favorites yet! Go find some puppies to love ❤️</p>
            ) : (
                // If there are favorites, show them
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {favorites.map((imageUrl, index) => (
                        <div 
                            key={index} 
                            className="bg-white rounded-lg shadow-lg overflow-hidden"
                        >
                            {/* Image */}
                            <img 
                                src={imageUrl} 
                                alt={`Favorite puppy ${index + 1}`}
                                className="w-full h-64 object-cover"
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Favorites;
