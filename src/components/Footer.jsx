/* eslint-disable react/prop-types */
export default function Footer(props){
    // eslint-disable-next-line no-unused-vars
    const {showModal, handleToggleModal, data} = props;
    return(
        <footer className=" fixed bottom-0 left-0 w-full flex justify-between gap-4 p-4">
            {/* bgGradient */}
            <div className=" absolute inset-0 z-[-1] bg-gradient-to-t from-[#030615] to-transparent"></div>
            <div className="flex flex-col gap-1">
                <h2 className=" text-3xl font-semibold">{data?.title}</h2>
                <h1 className=" text-xl font-extralight">APOD PROJECT</h1>
            </div>
            <button onClick={handleToggleModal} className=" bg-transparent border-none outline-none text-white duration-200 hover:opacity-70 cursor-pointer">
                <i className="fa-solid fa-circle-info text-2xl"></i>
            </button>
        </footer>
    )
}