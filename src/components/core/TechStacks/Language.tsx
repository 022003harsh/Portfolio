import { LANGUAGE_TECH } from "@/constants"

const Language = () => {
  return (
    <div className="w-full h-full rounded-3xl p-6 gap-4 xl:gap-10 flex flex-col justify-between  bg-gradient-to-r from-slate-900 to-slate-800">
      <div className="flex flex-wrap gap-2  cursor-default">
      { 
        LANGUAGE_TECH.map((lang,index) => (
             <div className=" bg-slate-900 shadow-[0_3px_2px_rgba(8,_132,_4,_0.7)] hover:shadow-[0_2px_3px_rgba(8,_132,_4,_0.7)] hover:scale-95 duration-100 p-2 text-sm font-medium rounded-lg shadow-4xl" key={index}>
                {lang.name}
             </div>
         )) 
       }
      </div>
      <div>
        <p className='text-[#817e7e] text-base font-medium font-edu-sa'>Languages</p>
        {/* <h2 className='text-white text-sm sm:text-lg font-bold'>Languages</h2> */}
      </div>
    </div>
  )
}

export default Language
