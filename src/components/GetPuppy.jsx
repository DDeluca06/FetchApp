import PropTypes from 'prop-types';
import { useState, forwardRef, useImperativeHandle } from 'react';

const GetPuppy = forwardRef(({ onLoading, onError, onFetch }, ref) => {
    const [puppy, setPuppy] = useState(null);

    // Fetch puppy from Dog API
    const fetchPuppy = async () => {
        // Show loading state
        try {
            onLoading(true);
            const data = await fetch("https://dog.ceo/api/breeds/image/random");
            
            // Check if the response is ok
            if (!data.ok) {
                throw new Error('Failed to fetch puppy');
            }

            const response = await data.json();
            setPuppy(response.message);
            onError(null);
            if (onFetch) onFetch();
        }
        // If there is an error, show error message
        catch (err) {
            console.error('Error fetching puppy:', err);
            onError('Failed to fetch a puppy. Please try again later.');
            setPuppy(null);
        }
        // Hide loading state
        finally {
            onLoading(false);
        }
    }

    // Expose fetchPuppy to parent component
    useImperativeHandle(ref, () => ({
        fetchPuppy
    }));

    return (
        <>
            
            {puppy && (
                <div id="puppy-container" className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <img 
                        src={puppy} 
                        className="shadow-lg"
                        loading="eager"
                        alt="Random puppy"
                    />
                </div>
            )}
        </>
    )
});

// Prop types for the GetPuppy component
GetPuppy.propTypes = {
    onLoading: PropTypes.func.isRequired,
    onError: PropTypes.func.isRequired,
    onFetch: PropTypes.func,
}

// Add display name for better debugging
GetPuppy.displayName = 'GetPuppy';

export default GetPuppy;
