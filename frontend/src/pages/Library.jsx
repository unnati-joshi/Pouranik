import { useEffect, useState } from "react";
import { IoLibraryOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import ShelfSection from '../components/Library_components/ShelfSection';
import useLibraryBooks from "../components/Library_components/books";

const Library = () => {
    const [_, setToken] = useState(localStorage.getItem("token"));
    const [reloadTrigger, setReloadTrigger] = useState(false);
    
    //for library book data to be refetched for different users as they sign in i.e. as token gets changed, its like refreshing
    useEffect(() => {
        const handleStorage = () => {
            setToken(localStorage.getItem("token"));
            setReloadTrigger(prev => !prev);
        };

        window.addEventListener("storage", handleStorage);
        return () => window.removeEventListener("storage", handleStorage);
    }, [])

    const { currentlyReading, nextUp, finished } = useLibraryBooks(reloadTrigger);

    const onBookChange = () => {
  setReloadTrigger(prev => !prev); // toggles to trigger useEffect
};

    
    return (
        <div className='flex flex-col justify-center items-center !m-7'>
            <section className='w-[80%] space-y-2 mt-7'>
                <h1 className="mb-6 font-bold floating-animation flex gap-3.5 justify-center items-center"
                    style={{ color: "var(--primary-700)" }}>
                    <IoLibraryOutline />
                    <span>Library</span>
                </h1>
                <p className='font-semibold text-2xl'>
                    Keep the story going ...
                </p>
                <p className=''>Greater you immerse yourself in the world of literature, the more vividly you begin to live lives beyond your own</p>
            </section>

            <section className='w-[94%] bg-orange-50 rounded-2xl !p-4'>
                <div className='flex justify-between items-center bg-white/50 rounded-2xl'>
                  <div>
                    <button className='!text-[#9ca3af] hover:!text-[#a16207] !bg-white hover:!bg-[#f5e8dc]'>Shelves</button>
                  <button className='!text-[#9ca3af] hover:!text-[#a16207] !bg-white hover:!bg-[#f5e8dc]'>All Books</button>
                  </div>
                  <div className='flex justify-center items-center'>
                    <CiSearch />
                    <input type="text" />
                  </div>
                </div>
                <section className='w-[94%] h-[800px] grid grid-cols-1 grid-rows-3 gap-4'>
                <ShelfSection title="Currently reading" books={currentlyReading} onBookChange={onBookChange} />
                <ShelfSection title="Next up" books={nextUp} onBookChange={onBookChange} />
                <ShelfSection title="Finished" books={finished} onBookChange={onBookChange} />
            </section>
            </section>
        </div>
    )
}

export default Library
