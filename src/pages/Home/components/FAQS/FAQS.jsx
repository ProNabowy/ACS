import { Fragment } from 'react'
import angle from '/images/angle.svg'

/**
 * Component for the FAQs section of the home page
 * @returns {JSX.Element} The FAQs section
 */
export default function FAQS() {

    // Array of questions and answers
    const questions = [
        { question: "What are you shipping Options", answer: "We offer a variety of shipping options to accommodate different needs and preferences suc Sea Freight, Air Freight, Overland" },
        { question: "How long does sea freight shipping take", answer: "Transit times for sea freight vary depending on the origin and destination. Generally, it can take anywhere from a few weeks to over a month. Specific transit times can be provided upon booking." },
        { question: "How do you ensure the safety of overland shipments?", answer: "We use secure packaging, GPS tracking, and a network of reliable carriers to ensure the safety and timely delivery of your overland shipments. Our team monitors shipments closely to address any issues that may arise." },
        { question: "What should I do if my shipment is delayed or lost?", answer: "If your shipment is delayed or lost, please contact our customer service team immediately. We will investigate the issue and work to resolve it as quickly as possible" },
    ];

    return (
        <section className='my-20'>

            <div className='container'>

                {/* FAQs title */}
                <h2 className='min-title'>FAQS</h2>

                {/* Map each question and answer to a question component */}
                {questions.map((item, index) => {

                    return (
                        <div key={index} onClick={e => e.currentTarget.classList.toggle('active')} className={`flex gap-2 ${questions.length === (index + 1) ? "" : "border-b-2"} overflow-hidden cursor-pointer accordion-question`}>

                            {/* Question */}
                            <div className='flex-1'>

                                <h3 className='text-[#0D1A36] text-md-text font-semibold'>{item.question}</h3>
                                <p className='text-16px] text-[#566EA0] font-normal pb-6 mb-4'>{item.answer}</p>

                            </div>

                            {/* Arrow icon */}
                            <img src={angle} className='w-fit cursor-pointer' alt="" />

                        </div>
                    )

                })}

            </div>

        </section>
    )
}
