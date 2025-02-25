import Button from "./common/Button";
import { usePuppy } from "./context/PuppyContext";
import PropTypes from 'prop-types';

const PuppyButton = () => {
    const { isLoading, isDebounced, fetchDog } = usePuppy();

    return (
        <Button
            variant="primary"
            size="large"
            className={`bg-blue-500 text-white hover:bg-blue-600 ${isDebounced || isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={fetchDog}
            disabled={isDebounced || isLoading}
            id="puppy-button"
        >
            {isLoading ? 'Loading...' : 'Get Puppy'}
        </Button>
    );
}

PuppyButton.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    isDebounced: PropTypes.bool.isRequired,
}

export default PuppyButton;