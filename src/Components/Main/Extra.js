import React from 'react'

const Extra = () => {
    return (
        <nav className="bg-gray-800">
            <div className="px-4 py-2 sm:hidden  ">
                <button
                    type="button"
                    className="text-white hover:text-gray-300 focus:outline-none focus:text-gray-300"
                    aria-label="Toggle menu"
                >
                    <svg
                        className="h-6 w-6 fill-current"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            className="hidden"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
                        />
                        <path
                            className="block"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M6 4h12V3H6v1zm0 7h12V9H6v2zm0 5h12v-2H6v2z"
                        />
                    </svg>
                </button>
            </div>
            {/* Mobile menu */}
            <div className="hidden sm:block">
                <div className="px-2 py-1">
                    <a
                        href="#"
                        className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    >
                        Home
                    </a>
                    <a
                        href="#"
                        className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    >
                        About
                    </a>
                    <a
                        href="#"
                        className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    >
                        Services
                    </a>
                    <a
                        href="#"
                        className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    >
                        Contact
                    </a>
                </div>
            </div>
        </nav>
    )
}

export default Extra
