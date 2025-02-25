import { createContext, useContext, useState, useCallback } from "react";
import PropTypes from "prop-types";

// Creating our context
const PuppyContext = createContext(null);

// Creating the provider of our ancient knowledge of dogs.
export const PuppyProvider = ({ children }) => {
    const [dogImage, setDogImage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [isDebounced, setIsDebounced] = useState(false);

    // Fetching a dog from the Dog API
    const fetchDog = useCallback(async () => {
        // Reset state on each fetch
        try {
            setIsLoading(true);
            setError(null);
            setIsDebounced(true);

            // Fetch
            const response = await fetch("https://dog.ceo/api/breeds/image/random");
            
            // Repsonse check, if not ok, back out.
            if (!response.ok) {
                throw new Error("Failed to fetch dog image");
            }

            // Set our image
            const data = await response.json();
            setDogImage(data.message);
        } catch (error) {
            setError(error.message);
            setDogImage(null);
        } finally {
            // Reset state, debounce.
            setIsLoading(false);
            setTimeout(() => setIsDebounced(false), 2000);
        }
    }, [isDebounced, isLoading]);

    return (
        <PuppyContext.Provider value={{
            dogImage,
            isLoading,
            error,
            isDebounced,
            fetchDog
            }}>
            {children}
        </PuppyContext.Provider>
    );
};

PuppyProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export const usePuppy = () => {
    const context = useContext(PuppyContext);
    if (!context) {
        throw new Error("usePuppy must be used within a PuppyProvider");
    }
    return context;
};