import { createContext, useContext, useState, useCallback } from "react";
import PropTypes from "prop-types";

// Creating our context
const PuppyContext = createContext(null);

// Default settings
const defaultSettings = {
    theme: "light",
    notifications: true,
    sound: true,
};

// Creating the provider of our ancient knowledge of dogs.
export const PuppyProvider = ({ children }) => {
    const [dogImage, setDogImage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [isDebounced, setIsDebounced] = useState(false);

    // States for history & favorites
    const [history, setHistory] = useState([]);
    const [favorites, setFavorites] = useState(() =>
        JSON.parse(localStorage.getItem("favorites")) || []
    );

    // Setting Constants
    const [settings, setSettings] = useState(() =>
        JSON.parse(localStorage.getItem("settings")) || defaultSettings
    );

    // Fetching a dog from the Dog API
    const fetchDog = useCallback(async () => {
        try {
            setIsLoading(true);
            setError(null);
            setIsDebounced(true);
            // Clear the current dog image while loading
            setDogImage(null);

            const response = await fetch("https://dog.ceo/api/breeds/image/random");
            
            if (!response.ok) {
                throw new Error("Failed to fetch dog image");
            }

            const data = await response.json();
            setDogImage(data.message);

            // Update history - this is automatic
            setHistory((prev) => [data.message, ...prev].slice(0, 10));

        } catch (error) {
            setError(error.message);
            setDogImage(null);
        } finally {
            setIsLoading(false);
            setTimeout(() => setIsDebounced(false), 2000);
        }
    }, []);

    // Function for user-initiated favoriting
    const likeDog = useCallback(() => {
        if (dogImage && !favorites.includes(dogImage)) {
            const newFavorites = [...favorites, dogImage];
            setFavorites(newFavorites);
            localStorage.setItem("favorites", JSON.stringify(newFavorites));
        }
    }, [dogImage, favorites]);

    // Function for updating settings
    const updateSettings = useCallback((newSettings) => {
        // Merge the new settings with existing settings
        const updatedSettings = {
            ...settings,
            ...newSettings
        };
        
        // Update state
        setSettings(updatedSettings);
        
        // Save to localStorage
        localStorage.setItem("settings", JSON.stringify(updatedSettings));
    }, [settings]);

    return (
        <PuppyContext.Provider value={{
            dogImage,
            isLoading,
            error,
            isDebounced,
            fetchDog,
            likeDog,
            history,
            favorites,
            settings,
            updateSettings,
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