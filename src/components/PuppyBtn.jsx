import Button from "./common/Button";
import { usePuppy } from "./context/PuppyContext";

const PuppyButton = () => {
    const { isLoading, isDebounced, fetchDog } = usePuppy();
    
    console.log('PuppyButton render:', { isLoading, isDebounced });

    const handleClick = async () => {
        console.log('Button clicked, fetching dog...');
        await fetchDog();
    };

    return (
        <Button
            variant="primary"
            size="large"
            className={`bg-blue-500 text-white hover:bg-blue-600 ${isDebounced || isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={handleClick}
            disabled={isDebounced || isLoading}
            id="puppy-button"
        >
            {isLoading ? 'Loading...' : 'Get Puppy'}
        </Button>
    );
}

export default PuppyButton;