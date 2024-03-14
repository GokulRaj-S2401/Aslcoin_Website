import React from 'react'

const Table = ({tableHeading,thclassName , children,height,width,shadow,border,px,py,bg}) => {
  return (
    <div className={`${width?width:'w-[82%]'} min-w-fit  ${shadow?shadow:'shadow-xl'}  ${border?border:'border'}border-[#3a3e3f] relative z-10 text-center  ${py?py:'py-9'} ${px?px:'px-4'}  ${bg?bg:'bg-[#3D4143]'} rounded-[32px] mx-auto mt-8`}>
    <div style={{height}} className="overflow-x-scroll">
      <table className="w-full table-auto">
        <thead>
          <tr>
            {
                tableHeading.map((item,i)=>
                <th className={thclassName?thclassName:"text-[13px] pb-3 font-normal"} key={i}>{item}</th>)
            }
          </tr>
        </thead>
        <tbody>
          {children}
        </tbody>
      </table>
    </div>
  </div>
  )
}

export default Table