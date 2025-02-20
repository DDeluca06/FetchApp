import Button from "./common/Button";
import PropTypes from 'prop-types';

const PuppyButton = ({ onClick, isLoading, isDebounced }) => {
    return (
        <Button
            variant="primary"
            size="large"
            className={`bg-blue-500 text-white hover:bg-blue-600 ${isDebounced || isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={onClick}
            disabled={isDebounced || isLoading}
            id="puppy-button"
        >
            {isLoading ? 'Loading...' : 'Get Puppy'}
        </Button>
    )
}

PuppyButton.propTypes = {
    onClick: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
    isDebounced: PropTypes.bool.isRequired,
}

export default PuppyButton;