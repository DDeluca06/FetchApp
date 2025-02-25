import PropTypes from 'prop-types';
import { usePuppy } from './context/PuppyContext';

function GetPuppy() {
    const { dogImage, error } = usePuppy();

    if (!dogImage && !error) return null;

    return (
        <>
        { dogImage && (
            <div className="flex justify-center items-center h-screen">
                <img src={dogImage} alt="A puppy!" className="max-w-full max-h-full object-contain" />
            </div>
        )}
        { error && (
            <div className="flex justify-center items-center h-screen">
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
