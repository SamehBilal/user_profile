import React from 'react'

function Form() {
  return (
    

<form>
    <div className="grid gap-6 mb-6 md:grid-cols-2">
        <div>
            <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-zinc-900 dark:text-white">First name</label>
            <input type="text" id="first_name" className="bg-zinc-50 border border-zinc-300 text-zinc-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary" placeholder="John" required />
        </div>
        <div>
            <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-zinc-900 dark:text-white">Last name</label>
            <input type="text" id="last_name" className="bg-zinc-50 border border-zinc-300 text-zinc-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary" placeholder="Doe" required />
        </div>
        <div>
            <label htmlFor="company" className="block mb-2 text-sm font-medium text-zinc-900 dark:text-white">Company</label>
            <input type="text" id="company" className="bg-zinc-50 border border-zinc-300 text-zinc-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary" placeholder="Flowbite" required />
        </div>  
        <div>
            <label htmlFor="phone" className="block mb-2 text-sm font-medium text-zinc-900 dark:text-white">Phone number</label>
            <input type="tel" id="phone" className="bg-zinc-50 border border-zinc-300 text-zinc-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
        </div>
        <div>
            <label htmlFor="website" className="block mb-2 text-sm font-medium text-zinc-900 dark:text-white">Website URL</label>
            <input type="url" id="website" className="bg-zinc-50 border border-zinc-300 text-zinc-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary" placeholder="flowbite.com" required />
        </div>
        <div>
            <label htmlFor="visitors" className="block mb-2 text-sm font-medium text-zinc-900 dark:text-white">Unique visitors (per month)</label>
            <input type="number" id="visitors" className="bg-zinc-50 border border-zinc-300 text-zinc-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary" placeholder="" required />
        </div>
    </div>
    <div className="mb-6">
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-zinc-900 dark:text-white">Email address</label>
        <input type="email" id="email" className="bg-zinc-50 border border-zinc-300 text-zinc-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary" placeholder="john.doe@company.com" required />
    </div> 
    <div className="mb-6">
        <label htmlFor="password" className="block mb-2 text-sm font-medium text-zinc-900 dark:text-white">Password</label>
        <input type="password" id="password" className="bg-zinc-50 border border-zinc-300 text-zinc-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary" placeholder="•••••••••" required />
    </div> 
    <div className="mb-6">
        <label htmlFor="confirm_password" className="block mb-2 text-sm font-medium text-zinc-900 dark:text-white">Confirm password</label>
        <input type="password" id="confirm_password" className="bg-zinc-50 border border-zinc-300 text-zinc-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary" placeholder="•••••••••" required />
    </div> 
    <div className="flex items-start mb-6">
        <div className="flex items-center h-5">
        <input id="remember" type="checkbox" value="" className="w-4 h-4 accent-primary dark:accent-primaryDark border border-zinc-300 rounded bg-zinc-50 focus:ring-3 focus:ring-blue-300 dark:bg-zinc-700 dark:border-zinc-600 dark:focus:ring-primaryLighter dark:ring-offset-zinc-800" required />
        </div>
        <label htmlFor="remember" className="ms-2 text-sm font-medium text-zinc-900 dark:text-zinc-300">I agree with the <a href="#" className="text-primary hover:underline dark:text-primaryDark">terms and conditions</a>.</label>
    </div>
    <button type="submit" className="text-white bg-primaryDark hover:bg-primaryDark focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-primaryLighter dark:hover:bg-primaryDark dark:focus:ring-primaryDark">Submit</button>
</form>

  )
}

export default Form