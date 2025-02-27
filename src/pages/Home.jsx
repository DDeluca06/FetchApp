import PuppyBtn from "../components/PuppyBtn";
import GetPuppy from "../components/GetPuppy";
import LikePuppy from "../components/LikePuppy";
import { usePuppy } from "../components/context/PuppyContext";
import { useEffect, useRef } from "react";

const Home = () => {
    const { error, fetchDog } = usePuppy();
    const initialFetchDone = useRef(false);

    // Fetch dog on mount
    // Restrictions: Only fetch once
    useEffect(() => {
        if (!initialFetchDone.current) {
            fetchDog();
            initialFetchDone.current = true;
        }
    }, [fetchDog]);

    return (
        <div className="page-container">
            <h1 className="text-4xl font-bold mb-4">Puppy Generator</h1>
            <div className="flex justify-center items-center gap-4">
                <PuppyBtn />
                <LikePuppy />
            </div>
            {error && (
                <div className="text-red-500 mt-2">
                    <p>Error: {error}</p>
                </div>
            )}
            <GetPuppy />
        </div>
    );
};

export default Home;