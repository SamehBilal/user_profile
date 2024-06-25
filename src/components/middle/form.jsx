import React from 'react'

function Form() {
  return (
    
<form>
    <div className="grid gap-6 mb-6 md:grid-cols-2">
        <div>
            <label for="first_name" className="block mb-2 text-sm font-medium text-gray-900 ">First name</label>
            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 " placeholder="John" required />
        </div>
        <div>
            <label for="last_name" className="block mb-2 text-sm font-medium text-gray-900 ">Last name</label>
            <input type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 " placeholder="Doe" required />
        </div>
        <div>
            <label for="company" className="block mb-2 text-sm font-medium text-gray-900 ">Company</label>
            <input type="text" id="company" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 " placeholder="Flowbite" required />
        </div>  
        <div>
            <label for="phone" className="block mb-2 text-sm font-medium text-gray-900 ">Phone number</label>
            <input type="tel" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 " placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
        </div>
        <div>
            <label for="website" className="block mb-2 text-sm font-medium text-gray-900 ">Website URL</label>
            <input type="url" id="website" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 " placeholder="flowbite.com" required />
        </div>
        <div>
            <label for="visitors" className="block mb-2 text-sm font-medium text-gray-900 ">Unique visitors (per month)</label>
            <input type="number" id="visitors" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 " placeholder="" required />
        </div>
    </div>
    <div className="mb-6">
        <label for="email" className="block mb-2 text-sm font-medium text-gray-900 ">Email address</label>
        <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 " placeholder="john.doe@company.com" required />
    </div> 
    <div className="mb-6">
        <label for="password" className="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
        <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 " placeholder="•••••••••" required />
    </div> 
    <div className="mb-6">
        <label for="confirm_password" className="block mb-2 text-sm font-medium text-gray-900 ">Confirm password</label>
        <input type="password" id="confirm_password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 " placeholder="•••••••••" required />
    </div> 
    <div className="flex items-start mb-6">
        <div className="flex items-center h-5">
        <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primaryLight accent-primary " required />
        </div>
        <label for="remember" className="ms-2 text-sm font-medium text-gray-900">I agree with the <a href="#" className="text-primaryDark hover:underline ">terms and conditions</a>.</label>
    </div>
    <button type="submit" className="text-white bg-primaryDark hover:bg-primaryDark focus:ring-4 focus:outline-none focus:ring-primaryLight font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Submit</button>
</form>
  )
}

export default Form