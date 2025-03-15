import React from 'react'

function UserRegistrationForm() {
  return (
    <div className='flex flex-col items-center justify-start h-screen'>
    <h1 className='text-3xl font-bold my-4 text-[#222222]'>Sign-Up!</h1>
    <p className='text-[#222222] flex-wrap text-center'>Registered users will get newsletter, download resources <br></br> and software to use - Everything For FREE!!</p>
    <fieldset className="my-4 fieldset w-xs bg-base-200 border border-base-300 p-4 rounded-box">
        
        <label className="fieldset-label">Email</label>
        <input type="email" className="input" placeholder="Email" />

        <label className="fieldset-label">User Name</label>
        <input type="text" className="input" placeholder="User Name" />
        
        <label className="fieldset-label">Password</label>
        <input type="password" className="input" placeholder="Password" />
        
        <button className="btn btn-neutral mt-4 bg-[#E85235] border-b-4 border-0 border-[#DD391A]">Create Account</button>
</fieldset>
    </div>
  )
}

export default UserRegistrationForm
