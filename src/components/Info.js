import profilePic from '../profile-pic.jpg'

export const Info = () => {
    return(
        <div>
            <Photo />
            <Name/>
            <Buttons/>
        </div>
    )
}



const Photo = () => {
    return <img className='h-[317px] w-full object-cover' src={profilePic} alt="" />
}


const Name = () => {
    return(
        <div className='text-center mt-5'>
            <h1 className='text-white text-2xl font-semibold tracking-tight'>Justine Edward Santos</h1>
            <h2 className='text-yellow-500 text-sm mt-1'>Frontend Developer</h2>  
            <h3 className='text-gray-200 text-xs mt-2'>justineedward.website</h3>  
        </div>
    )
}

const Buttons = () =>{
    return(
        <div className='flex justify-center items-center mt-[17px]'>

            <div className='bg-white w-[115px] mr-4 py-2 px-3 text-center rounded-md cursor-pointer'>
            <i className="fa-solid fa-envelope"></i>
            <p className='inline text-sm ml-2'>Email</p>
            </div>

            <div className='bg-blue-400 w-[115px] py-2 px-3 text-center rounded-md cursor-pointer'>
            <i className="fa-brands fa-linkedin text-white"></i>
            <p className='inline text-sm ml-2 text-white'>LinkedIn</p>
            </div>
           
        </div>
    )
}