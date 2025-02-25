import PuppyBtn from "../components/PuppyBtn";
import GetPuppy from "../components/GetPuppy";
import { usePuppy } from "../components/context/PuppyContext";

const Home = () => {
    const { error } = usePuppy();

    return (
        <div className="relative z-20 text-center">
            <h1 className="text-4xl font-bold">Puppy Generator</h1>
            <PuppyBtn />
            {error && (
                <div className="text-red-500">
                    <p>Error: {error}</p>
                </div>
            )}
            <GetPuppy />
        </div>
    );
};

export default Home;
