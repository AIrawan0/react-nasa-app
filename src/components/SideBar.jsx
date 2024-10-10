/* eslint-disable react/prop-types */
export default function SideBar(props){
    const {handleToggleModal, data} = props;
    return(
        // Sidebar
        <div className="fixed inset-0 flex flex-col z-10 sm:relative sm:inset-[unset] sm:min-w-1/3 sm:shadow-2xl sm:shadow-[#030615]">
            {/* BgOverlay */}
            <div onClick={handleToggleModal} className=" absolute inset-0 bg-[#030615] opacity-60"></div>

            {/* sidebarCOntent */}
            <div className="z-20 relative flex flex-col gap-4 p-4 overflow-y-scroll h-full w-[90%] max-w-[800px] ml-auto bg-[#030615] sm:m-[unset]">

                <h2 className=" text-2xl font-extralight">{data?.title}</h2>
                <div className="flex-[1] flex flex-col gap-2">
                    <p className="text-lg font-extralight">{data?.date}</p>
                    <p>{data?.explanation}</p>
                </div>

                <button onClick={handleToggleModal} className=" bg-transparent text-white border-none outline-none mr-auto cursor-pointer duration-200 py-4 px-0">
                    <i className="fa-solid fa-arrow-right"></i>
                </button>

            </div>
        </div>
    )
}