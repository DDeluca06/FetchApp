import { useState, useRef } from 'react';
import PuppyButton from './components/PuppyBtn';
import GetPuppy from './components/GetPuppy';
import './App.css';

function App() {
    const [isLoading, setIsLoading] = useState(false); // Loading state
    const [error, setError] = useState(null); // Error state
    const [isDebounced, setIsDebounced] = useState(false); // Debounce state
    const puppyRef = useRef(null); // Reference for the GetPuppy component

    const handleClick = () => {
        if (isDebounced || isLoading) return;
        setIsDebounced(true);
        
        // Call fetchPuppy through the ref
        if (puppyRef.current) {
            puppyRef.current.fetchPuppy();
        }
        
        // Reset debounce after 2 seconds
        setTimeout(() => setIsDebounced(false), 2000);
    }

    return (
        // Main container
        <div className="relative z-20 text-center">
            <PuppyButton 
                onClick={handleClick}
                isLoading={isLoading}
                isDebounced={isDebounced}
            />
            {/* Error message */}
            {error && <p className="text-red-500 mt-2">{error}</p>}
            {/* GetPuppy component */}
            <GetPuppy 
                ref={puppyRef}
                onLoading={setIsLoading}
                onError={setError}
            />
        </div>
    )
}

export default App;
