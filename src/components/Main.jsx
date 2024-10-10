/* eslint-disable react/prop-types */
export default function Main(props){
    const { data } = props
    return(
        // imageCOntainer
        <div className="flex flex-col">
            {/*class bgImage */}
            <img src={data?.hdurl} alt={data?.title || 'bg-img'} className="w-full h-full flex-[1] object-cover" />
        </div>

    )
}