import { usePuppy } from './context/PuppyContext';
import { useState, useEffect } from 'react';

function GetPuppy() {
    const { dogImage, error, isLoading } = usePuppy();
    const [currentImage, setCurrentImage] = useState(null);
    const [isFetching, setIsFetching] = useState(false);

    // Handle new image arrival
    useEffect(() => {
        if (dogImage) {
            setCurrentImage(dogImage);
            setIsFetching(false); // Stop fetching state once the new image is loaded
        }
    }, [dogImage]);

    // Trigger fetching state when isLoading changes
    useEffect(() => {
        if (isLoading) {
            setIsFetching(true);
        }
    }, [isLoading]);

    if (!currentImage && !error) return null;

    return (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90vw] md:w-[60vw] lg:w-[50vw] max-w-2xl p-4 bg-[var(--bg-secondary)] rounded-lg shadow-[var(--card-shadow)]">
            <div className="aspect-square w-full relative">
                {/* Current image with pulse animation during fetching */}
                {currentImage && (
                    <div 
                        className={`w-full h-full ${isFetching ? 'animate-pulse' : ''}`}
                        style={{
                            opacity: isFetching ? 0.5 : 1, // Reduce opacity during fetching
                            transition: 'opacity 0.3s ease-in-out', // Smooth opacity transition
                        }}
                    >
                        <img 
                            src={currentImage} 
                            alt="A puppy!" 
                            className="w-full h-full object-contain rounded-lg"
                        />
                    </div>
                )}

                {/* Loading spinner (optional) */}
                {isFetching && (
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-24 h-24 rounded-full border-8 border-[var(--accent-color)] border-t-transparent animate-spin" />
                    </div>
                )}

                {/* Error message */}
                {error && (
                    <div className="absolute inset-0 flex items-center justify-center">
                        <p className="text-[var(--error-color)]">Error: {error}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

// Add display name for better debugging
GetPuppy.displayName = 'GetPuppy';

export default GetPuppy;