import React, { useState } from 'react';

function Faq() {
  const faqData = [
    {
      question: "Whats your return policy for subscription-based services?",
      answer: "As a startup focused on delivering continouse value, we offer a 30 days satisfaction guarantee for all subscription-based services. if you're not fully satisfied within the first month, we provide a fully refund. We believe that being transparent and building trust is essential for any innovative business and your feedack helps us Grow.",
    },
    {
      question: "How long does it takes to see result from our services?",
      answer: "Results depends on various factors, including your specific business goal and market readiness. For most of our clients, meaninful outcome become visible within 2-3months, but we advice giving any stragedy at leadt 6 months to evaluate its fully impacts. As a startup, agility and patience go hand-in-hand when you're  ",
    },
    {
      question: "What kind of customer support do we provide for growing startups?",
      answer: "We offer 24/7 customer support to ensure you are never stuck when it comes to solving challenges or scaling your business. Our dedicated team is equipped to provide not only technical support but also strategic advice on how you can navigate growth in highly competitive market. We also offer quarterly check-ins too",
    },
    {
      question: "What's the biggest Challenge most startups face and how can we help?",
      answer: "Startups often struggle in finding the right product-market fit and scaling efficiently without burning out resources. Our services are designed to help test your ideas rapidly and scale them systematically. We guide you in assessing your risk appetite , exploring untapped opportunities and implemening growth.",
    },
    {
      question: "How do we help you innovate and stay competitive in a crowded market",
      answer: "Innovation requires constant iteration and the courage to pivot when necessary. Our tools ans strategies are designed to give you real-time insights, helping you get ahead of the curves, By analyzing trends and consumer behaviours, we enable you to make data-driven decision that leads to sustainable growth.  ",
    },

  ];
  const [openFaq, setOpenFaq] = useState()

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index)
  }
  return (
    <div className='w-4/5 m-auto my-20 p-4 '>
      <h1 className='text-3xl font-semibold text-gray-600 mb-6'>Frequently Asked Questions:</h1>
      {faqData.map((faq, index) => (
        <div key={index} className='mb-4'>
          <div onClick={()=> toggleFaq(index)} className='flex justify-between items-center bg-white/50 px-5 py-3 rounded-xl cursor-pointer'>
            <h2 className='text-lg font-medium text-gray-900'>
              {faq.question}
            </h2>
            <span className='text-xl text-gray-500'>{openFaq === index ? "-" : "+"}</span>
          </div>
          <div className={`overflow-hidden transition-all duration-300 ${openFaq === index ? "max-h-40": "max-h-0" }`}>
            <p className='p-4 text-gray-700'>{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Faq;
