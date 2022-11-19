import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#f0f3f8] flex justify-center items-center p-4 pt-20'>
        <form method='POST' action="https://getform.io/f/8a773c92-91f5-4909-a9be-fd7a21b81bd2" className='flex flex-col max-w-[600px] w-full h-full'>
            <div className='pb-8 text-center'>
                <p className='text-4xl font-bold inline text-[#0a192f]'>Contact</p>
                <p className='text-[#0a192f] py-4 font-bold'>Submit the form below or shoot me an email - raymondnsiegbunam@gmail.com</p>
            </div>
            <input className='bg-[#e9ecf8] p-2 font-bold' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#e9ecf8] font-bold' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#e9ecf8] p-2 font-bold' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-0 bg-[#0a192f] hover:bg-blue-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Connect</button>
        </form>

    </div>
  )
}

export default Contact;