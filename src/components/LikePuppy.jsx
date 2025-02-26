import { usePuppy } from './context/PuppyContext';
import Button from './common/Button';

const LikePuppy = () => {
    const { likeDog, dogImage, favorites } = usePuppy();
    
    // Check if the dog image is already favorited
    const isAlreadyFavorited = dogImage && favorites.includes(dogImage);

    return (
        <Button
            variant="secondary"
            size="large"
            className={`ml-4 ${isAlreadyFavorited ? 'bg-pink-500' : 'bg-gray-500'} text-white hover:opacity-80`}
            onClick={likeDog}
            disabled={!dogImage || isAlreadyFavorited}
        >
            {isAlreadyFavorited ? '❤️ Favorited' : '🤍 Favorite'}
        </Button>
    );
};

export default LikePuppy;
