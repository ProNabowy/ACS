import React from 'react'
import { icons } from './images/data.jsx';

/**
 * Render a row component for the Incomerms component.
 * 
 * @param {Object} props - The component props.
 * @param {Object} props.item - The data item for the row.
 * @param {string} props.item.ch - The character for the row.
 * @param {string} props.item.logo - The logo for the row.
 * @param {string} props.item.title - The title for the row.
 * @param {Array} props.item.fillCount - The fill count for the row.
 * @param {number} props.item.progress - The progress for the row.
 * @returns {JSX.Element} The rendered row component.
 */
const Row = ({ item }) => {
    // Render the row component
    return (
        <div className="container flex items-center mb-3 overflow-">
            {/* Render the left angle container */}
            <div className='relative me-[-50px] angle-container'>
                <div className='angle flex items-center gap-2 px-2'>
                    {/* Render the character */}
                    <div className='w-[25px] h-[25px] rounded-full flex-center bg-[#C7CFDF]'>{item?.ch}</div>
                    {/* Render the logo */}
                    <p className='text-white font-semibold text-sm-text sm:text-[18px]'>{item?.logo}</p>
                </div>
                {/* Render the white angle */}
                <div className='angle-white'></div>
            </div>
            {/* Render the right container */}
            <div className='flex-1 bg-[#C7CFDF] h-[40px] grid grid-cols-12 relative min-w-[800px]'>
                {/* Render the title */}
                <p className='h-full bg-[#1E3D81] abs-left text-white text-sm-text sm:text-[18px] font-medium ps-[80px] flex items-center'
                    style={{ width: `${item.progress}%` }}>{item?.title}</p>
                {/* Render the fill count */}
                {
                    new Array(12).fill(10).map((_, index) => {
                        return <div className={`p-3 ${item?.fillCount[index] ? typeof item.fillCount[index] === 'boolean' ? "bg-[#1E3D81]" : `bg-[${item.fillCount[index]}]` : ""}`}></div>
                    })
                }
            </div>
        </div>
    )
}

export default function Incomerms() {

    const MAIN_CARRIAGE_UNPAID = [
        { ch: "M", logo: "FCA", title: "Free Carrier (Place)", fillCount: new Array(4).fill(true) },
        { ch: "O", logo: "FAS", title: "Free Alongside Ship (Port)", fillCount: new Array(4).fill(true) },
        { ch: "O", logo: "FOB", title: "Free On Board (Port)", fillCount: new Array(4).fill(true) },
    ];

    const MAIN_CARRIAGE_PAID = [
        { ch: "O", logo: "CFR", title: "Cost And Freight (Port)", fillCount: new Array(5).fill(true) },
        { ch: "O", logo: "CIF", title: "Cost, Insurance & Freight (Port)", fillCount: new Array(5).fill(true) },
        { ch: "M", logo: "CPT", title: "Cost Paid To (Place)", fillCount: new Array(5).fill(true) },
        { ch: "M", logo: "CIP", title: "Delivery At Place", fillCount: new Array(5).fill(true) },
    ];

    const ARRIVAL = [
        { ch: "M", logo: "DPU", title: "Delivery At Place Unloaded (Place)", fillCount: [...new Array(8).fill(true), false, false, true, '#B3DFFF'] },
        { ch: "M", logo: "DAP", title: "Delivery At Place (Place)", fillCount: [...new Array(8).fill(true), false, false, false, '#B3DFFF'] },
        { ch: "M", logo: "DDP", title: "Delivery Duty Paid (Place)", fillCount: [...new Array(8).fill(true), true, true, false, true] },
    ]

    return (
        <section className='my-20 px-3'>

            <h3 className='bg-[#C7CFDF] container py-[14px] text-[#0D1A36] text-center font-medium text-[28px] mb-7'>INCOTERMS</h3>

            <div className='container flex items-center gap-3 sm:gap-8'>

                <h5 className='sm:text-[28px] font-medium w-fit sm:w-[120px] text-center'>Services</h5>

                <div className='flex flex-1 max-w-full overflow-auto'>

                    {
                        icons?.map((item, index) => {

                            return (
                                <div key={index} className='flex flex-col items-center min-w-[120px] xl:w-[calc(100%/12)]'>

                                    <img src={item.icon} className='w-fit' alt="" />

                                    <p className='text-sm-text sm:text-sm-text font-medium text-center'>{item.name}</p>

                                </div>
                            )

                        })
                    }

                </div>

            </div>

            <div className='relative overflow-auto'>

                <div className='relative z-10'>

                    <div className='border-b border-b-[#566EA0] my-3 relative'>

                        <Row item={{ ch: "M", logo: "EXW", title: "Ex Works", fillCount: [true, true] }} />

                        <p className='text-sm-text font-semibold absolute min-w-[120px] bottom-20 hidden 2xl:block' style={{ transform: "rotate(-90deg)" }}>DEPARTURE</p>

                    </div>

                    <div className='border-b border-b-[#566EA0] my-3 relative'>

                        {
                            MAIN_CARRIAGE_UNPAID.map((item, index) => <Row item={item} key={index} />)
                        }

                        <p className='text-sm-text font-semibold absolute top-[35%] translate-y-[-35%] max-w-[150px] text-center hidden 2xl:block' style={{ transform: "rotate(-90deg)" }}>MAIN CARRIAGE UNPAID</p>

                    </div>

                    <div className='border-b border-b-[#566EA0] my-3 relative'>

                        {
                            MAIN_CARRIAGE_PAID.map((item, index) => <Row item={item} key={index} />)
                        }

                        <p className='text-sm-text font-semibold absolute top-[35%] translate-y-[-35%] max-w-[150px] text-center hidden 2xl:block' style={{ transform: "rotate(-90deg)" }}>MAIN CARRIAGE PAID</p>

                    </div>

                    <div className='border-b border-b-[#566EA0] my-3 relative'>

                        {
                            ARRIVAL.map((item, index) => <Row item={item} key={index} />)
                        }

                        <p className='text-sm-text font-semibold absolute top-[35%] translate-y-[-35%] min-w-[150px] max-w-[150px] text-center hidden 2xl:block' style={{ transform: "rotate(-90deg)" }}>ARRIVAL</p>

                    </div>

                </div>

                <div className='container h-full absolute -top-3 left-[50%] translate-x-[-50%] hidden sm:block'>

                    <div className='h-full w-[calc(100%-152px)] ml-auto grid grid-cols-12 gap-5'>

                        {new Array(12).fill(1).map((_, index) => <div key={index} className='relative'> <div className='w-[1px] h-full bg-[#8F9EC0] absolute left-[50%] translate-x-[-50%] top-0'></div> </div>)}

                    </div>

                </div>

            </div>

            <div className="container border border-[#C7CFDF] overflow-auto rounded-[8px] py-3 px-4 mt-4 flex-center gap-6">

                <p className='text-[#566EA0] font-medium sm:text-md-text'>KEY:</p>

                <div className='w-[56px] min-w-[56px] h-[32px] bg-[#1E3D81]'></div>

                <p className='text-[#0D1A36] font-medium text-nowrap'>SELLER'S OBLIGATION</p>

                <div className='min-w-[56px] h-[32px] bg-[#C7CFDF]'></div>

                <p className='text-[#0D1A36] font-medium text-nowrap'>BUYER'S OBLIGATION</p>

                <div className='size-[32px] min-w-[32px] rounded-full flex-center bg-[#C7CFDF] font-medium'>M</div>

                <p className='text-[#0D1A36] font-medium text-nowrap'>ANY MODE OF TRANSPORT INCLUDING MULTIMODAL</p>

                <div className='size-[32px] min-w-[32px] rounded-full flex-center bg-[#C7CFDF] font-medium'>O</div>

                <p className='text-[#0D1A36] font-medium'>OCEAN</p>

            </div>

        </section>
    )
}
