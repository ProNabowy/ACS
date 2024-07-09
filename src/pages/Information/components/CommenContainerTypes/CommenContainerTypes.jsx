import React from 'react'
import container from './container.png';

const CommenContainer = ({ item }) => {

    return (
        <div className='grid grid-cols-12 mb-10 min-w-[1300px]'>

            <div className='col-span-3'>

                <p className='bg-[#1E3D81] text-center p-2 mb-8 text-white font-semibold text-sm-text sm:text-[18px]'>{item?.title} </p>

                <div className='flex-1 flex-center'>

                    <img src={container} className='w-fit' alt="" />

                </div>

            </div>

            <div className='col-span-9'>

                <p className='bg-[#566EA0] p-2 mb-8 text-white font-semibold text-sm-text sm:text-[18px]'>DIMENSIONS</p>

                <div className='grid grid-cols-12 gap-y-2'>

                    <p className='col-span-2 bg-[#E8ECF2] p-3 grid place-content-center text-[#0D1A36] font-medium text-sm-text sm:text-md-text'>Type</p>

                    <div className='col-span-3 bg-[#C7CFDF] p-3 flex flex-col gap-3 justify-center items-center'>

                        <h5 className='text-[#0D1A36] font-medium text-sm-text sm:text-md-text'>Container Weight</h5>

                        <div className='flex items-center gap-4 justify-center text-[#0D1A36] text-sm-text sm:text-[16px]'>

                            <p>Gross (kg)</p>
                            <p>Tare (kg)</p>
                            <p>Net (kg)</p>

                        </div>

                    </div>

                    <div className='col-span-5 bg-[#E8ECF2] p-3 flex flex-col gap-3 justify-center items-center'>

                        <h5 className='text-[#0D1A36] font-medium text-sm-text sm:text-md-text'>Interior Measurement</h5>

                        <div className='flex items-center gap-4 justify-center text-[#0D1A36] text-sm-text sm:text-base'>

                            <p>Length (m)</p>
                            <p>Width (m)</p>
                            <p>Height (m)</p>
                            <p>Capacity (m)</p>

                        </div>

                    </div>

                    <div className='col-span-2 bg-[#C7CFDF] p-3 flex flex-col gap-3 justify-center items-center'>

                        <h5 className='text-[#0D1A36] font-medium text-sm-text sm:text-md-text'>Door Open</h5>

                        <div className='flex items-center gap-4 justify-center text-[#0D1A36] text-sm-text sm:text-base'>

                            <p>Width</p>
                            <p>Height</p>

                        </div>

                    </div>

                    <div className='col-span-2 flex flex-col gap-1 items-center justify-center text-[#0D1A36] font-medium text-sm-text sm:text-[18px]'>

                        {
                            item?.type?.map((type, index) => {
                                return <p key={index}>{type}</p>
                            })
                        }

                    </div>

                    <div className='col-span-3 grid grid-cols-3 text-center gap-1 text-[#0D1A36] font-medium text-sm-text sm:text-[18px]'>

                        {
                            item?.weight?.map((weight, index) => {
                                return <p key={index}>{weight}</p>
                            })
                        }

                    </div>

                    <div className='col-span-5 grid grid-cols-4 text-center gap-1 text-[#0D1A36] font-medium text-sm-text sm:text-[18px]'>

                        {
                            item?.interior?.map((interior, index) => {
                                return <p key={index}>{interior}</p>
                            })
                        }

                    </div>

                    <div className='col-span-2 grid grid-cols-2 text-center gap-1 text-[#0D1A36] font-medium text-sm-text sm:text-[18px]'>

                        {
                            item?.door?.map((door, index) => {
                                return <p key={index}>{door}</p>
                            })
                        }

                    </div>

                </div>

                <h5 className='text-[15px] sm:text-[18px] text-[#0D1A36] font-semibold mt-10 mb-4'>CHARACTERISTICS</h5>

                <p className='text-[#0D1A36] text-sm-text sm:text-[18px]'>{item?.characteristics}</p>

            </div>


        </div>
    )

}
const data = [
    {
        title: "DRY CARGO CONTAINERS",
        type: ['20 ft', '40 ft'],
        weight: ['24.000', '2.580', '21.420', '30.000', '4.290', '26.190'],
        interior: ['5.629', '2.212', '2.311', '32.00', '11.763', '2.212', '2.311', '65.64'],
        door: ['2.330', '2.280', '2.330', '2.280'],
        characteristics: 'Manufactured from either aluminum or steel, suitable for most types of cargo / general cargo. Aluminum containers have a slightly larger payload than steel, and steel containers have a slightly larger internal volume.'
    },
    {
        title: "OPEN TOP CONTAINERS",
        type: ['20 ft', '40 ft'],
        weight: ['24.000', '2.580', '21.420', '30.000', '4.290', '26.190'],
        interior: ['5.629', '2.212', '2.311', '32.00', '11.763', '2.212', '2.311', '65.64'],
        door: ['2.330', '2.280', '2.330', '2.280'],
        characteristics: 'Allowing cargo to loaded from the top. open top containers are particularly suitable for bulky cargo such as filled with a PVC tarpaulin Cover and attachable bows with cable sealing devices. The container doors can be removed to make the stuffing of cargo more convenient. Manufactured from steel'
    },
    {
        title: "HIGH CUBE CONTAINERS",
        type: ['40 ft'],
        weight: ['30.000', '4.290', '26.190'],
        interior: ['11.763', '2.212', '2.311', '65.64'],
        door: ['2.330', '2.280'],
        characteristics: "With high cube containers, you gain an extra foot in height compared with general-purpose containers.Ideal for light, voluminous cargo or bulky cargo. These extra volume containers come in steel and aluminium.",
    },
]

export default function CommenContainerTypes() {


    return (
        <section className='container my-20 overflow-auto'>

            <h3 className='bg-[#C7CFDF] py-[14px] text-[#0D1A36] text-center font-medium smtext-[28px] mb-7'>COMMON CONTAINER TYPES</h3>

            {
                data.map((item, index) => {
                    return <CommenContainer key={index} item={item} />
                })
            }

        </section>
    )
}
