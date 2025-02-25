import PropTypes from 'prop-types';
import { usePuppy } from './context/PuppyContext';

function GetPuppy() {
    const { dogImage, error } = usePuppy();

    if (!dogImage && !error) return null;

    return (
        <>
            {dogImage && (
                <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90vw] md:w-[60vw] lg:w-[50vw] h-[60vh] max-w-2xl max-h-[600px] p-4 bg-white rounded-lg shadow-lg overflow-hidden">
                    <img 
                        src={dogImage} 
                        alt="A puppy!" 
                        className="w-full h-full object-contain rounded-md"
                        style={{
                            maxWidth: '100%',
                            maxHeight: '100%',
                        }}
                    />
                </div>
            )}
            {error && (
                <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <p className="text-red-500">Error: {error}</p>
                </div>
            )}
        </>
    );
}

// Prop types for the GetPuppy component
GetPuppy.propTypes = {
    onLoading: PropTypes.func.isRequired,
    onError: PropTypes.func.isRequired,
    onFetch: PropTypes.func,
}

// Add display name for better debugging
GetPuppy.displayName = 'GetPuppy';

export default GetPuppy;
