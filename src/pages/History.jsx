import { usePuppy } from '../components/context/PuppyContext';

const History = () => {
    const { history } = usePuppy();

    // Get the text for the viewed puppies
    // An inelegant solution, but it works
    const getViewedText = (index) => {
        if (index === 0) return "Most recent";
        if (index === 1) return "Previous puppy";
        return `${index + 1} puppies ago`;
    };

    // History page
    return (
        <div className="container mx-auto flex flex-col items-center justify-start min-h-screen p-4">
            <h1 className="text-4xl font-bold my-8">Recently Viewed Puppies</h1>
            {/* If no history, show message */}
            {history.length === 0 ? (
                <p className="text-gray-500">No puppies viewed yet! Go generate some cute puppies 🐕</p>
            ) : (
                // If there is history, show the puppies
                <div className="w-full overflow-x-auto scrollbar-hide">
                    <div className="flex flex-row justify-start gap-6 pb-6 mx-auto" 
                         style={{ 
                             width: 'max-content',
                             margin: '0 auto'
                         }}>
                        {history.slice(0, 12).map((imageUrl, index) => (
                            <div 
                                key={index} 
                                className="flex-none w-72 bg-white rounded-lg shadow-lg overflow-hidden"
                            >
                                <div className="h-48">
                                    <img 
                                        src={imageUrl} 
                                        alt={`Puppy ${index + 1} from history`}
                                        className="w-full h-full object-cover"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="p-3 bg-gray-50">
                                    <p className="text-gray-600 text-sm font-medium">
                                        {getViewedText(index)}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default History;
