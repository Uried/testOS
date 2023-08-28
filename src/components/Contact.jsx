import React, {useState} from 'react'
import axios from 'axios';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();


  axios.post('https://backend-portfolio-two.vercel.app/send-mail', {
    name,
    email,
    message
  })
    .then((res) => {
      console.log(res.data.message);
      alert('Your e-mail have been sent with successfully !');
    })
    .catch((error) => {
      console.log(error);
      alert('An error occured while sending the email, please try again');
    });
};

  return (
    <form onSubmit={handleSubmit} name='contact' className='w-full h-screen bg-none flex justify-center items-center p-4'>
        <div className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8 flex flex-col justify-center w-full h-full items-center'>
                <p className='text-4xl font-bold inline border-b-4 border-cyan-500 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>Send me a message</p>
            </div>
            <input onChange={(e) => setName(e.target.value)} className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' value={name} />
            <input value={email} onChange={(e) => setEmail(e.target.value)} className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
            <textarea value={message} onChange={(e) => setMessage(e.target.value)} className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button type='submit' className='text-white border-2 hover:bg-cyan-500 hover:border-cyan-500 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </div>
    </form>
  )
}
export default Contact;