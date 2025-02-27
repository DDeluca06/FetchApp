import { usePuppy } from "../components/context/PuppyContext";

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
    <div className="page-container">
      <h1 className="text-4xl font-bold my-8 pt-[120px]">Recently Viewed Puppies</h1>
      {/* If no history, show message */}
      {history.length === 0 ? (
        <p className="text-gray-500">No puppies viewed yet! Go generate some cute puppies 🐕</p>
      ) : (
        // If there is history, show the puppies
        <div className="w-full overflow-x-auto scrollbar-hide">
          <div className="flex flex-row justify-start gap-6 pb-6 mx-auto" style={{ width: "max-content" }}>
            {history.slice(0, 12).map((imageUrl, index) => (
              <div key={index} className="flex-none w-72 bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-3 bg-gray-50">
                  {/* Index and text */}
                  <p className="text-gray-600 text-sm font-medium">{getViewedText(index)}</p>
                </div>
                <div className="aspect-square w-full relative">
                  {/* Image*/}
                  <img src={imageUrl} alt={`Puppy ${index + 1} from history`} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
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
