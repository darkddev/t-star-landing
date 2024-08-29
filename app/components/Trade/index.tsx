import './style.css';

const Trade = () => {
    return (
        <div className="mx-auto max-w-7xl mt-20 mb-16 px-6 relative">
            <div className="radial-bgone hidden lg:block"></div>

            <div className="grid lg:grid-cols-1 gap-x-5">
                <div>
                    <h3 className="text-3xl lg:text-5xl font-semibold text-offwhite mb-6 text-center mb-20">Shoot Us an Email</h3>
                    <div className="flex">
                        <form className="max-w-2xl mx-auto rounded-lg shadow-md">
                            <div className="md:flex md:space-x-4">
                                <div className="md:w-1/2 mb-4 md:mb-0">
                                <label className="block text-gray-700 text-sm font-bold mb-2 text-offwhite" htmlFor="name">
                                    Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    className="text-offwhite shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="name"
                                    type="text"
                                    placeholder="Your name"
                                    required
                                />
                                </div>
                                <div className="md:w-1/2">
                                <label className="block text-gray-700 text-sm font-bold mb-2 text-offwhite" htmlFor="phone">
                                    Phone Number
                                </label>
                                <input
                                    className="text-offwhite shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="phone"
                                    type="text"
                                    placeholder="Your phone number"
                                />
                                </div>
                            </div>

                            <div className="md:flex md:space-x-4 mt-4">
                                <div className="md:w-1/2 mb-4 md:mb-0">
                                <label className="block text-gray-700 text-sm font-bold mb-2 text-offwhite" htmlFor="email">
                                    Email <span className="text-red-500">*</span>
                                </label>
                                <input
                                    className="text-offwhite shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="email"
                                    type="email"
                                    placeholder="Your email"
                                    required
                                />
                                </div>
                                <div className="md:w-1/2">
                                <label className="block text-gray-700 text-sm font-bold mb-2 text-offwhite" htmlFor="role">
                                    Are you a
                                </label>
                                <div className="relative">
                                    <select
                                    className="text-offwhite block appearance-none w-full border border-gray-400 px-4 py-2 pr-8 rounded shadow leading-tight"
                                    id="role"
                                    >
                                    <option>SELECT...</option>
                                    <option>INFLUENCER</option>
                                    <option>COMPANY</option>
                                    <option>AGENCY</option>
                                    <option>BRAND</option>
                                    <option>OTHER</option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg
                                        className="fill-current h-4 w-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M5.293 7.293l4.707 4.707 4.707-4.707 1.414 1.414L10 14.828 3.879 8.707l1.414-1.414z" />
                                    </svg>
                                    </div>
                                </div>
                                </div>
                            </div>

                            <div className="mt-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2 text-offwhite" htmlFor="message">
                                Message <span className="text-red-500">*</span>
                                </label>
                                <textarea
                                className="text-offwhite shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="message"
                                placeholder="Your message"
                                rows={4}
                                required
                                ></textarea>
                            </div>

                            <div className="flex items-center justify-center mt-6">
                                <button className="text-xl font-semibold text-white py-4 px-6 lg:px-12 navbutton mr-6" type="submit">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Trade;
