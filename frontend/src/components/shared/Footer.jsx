import React from 'react'

const Footer = () => {
    return (
        <footer className='border-t-2 border-t-gray-200 py-6'>
            <div className='container mx-auto px-4'>
                <div className='flex flex-col md:flex-row justify-between items-center'>
                    <div className='mb-4 md:mb-0'>
                        <h2 className='text-xl font-bold'>Job Sphere</h2>
                        <p className='text-sm'>&copy; 2024 Job Sphere. All rights reserved. </p>
                    </div>

                    <div className='flex space-x-4 mt-4 md:mt-0'>
                        <a href="http://www.facebook.com" target='_blank' className='hover:text-gray-400' aria-label='Facebook'>
                            <svg className='w-6 h-7' fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.9,2H3.1A1.1,1.1,0,0,0,2,3.1V20.9A1.1,1.1,0,0,0,3.1,22h9.58V14.25h-2.6v-3h2.6V9a3.64,3.64,0,0,1,3.88-4,20.26,20.26,0,0,1,2.33.12v2.7H17.3c-1.26,0-1.5.6-1.5,1.47v1.93h3l-.39,3H15.8V22h5.1A1.1,1.1,0,0,0,22,20.9V3.1A1.1,1.1,0,0,0,20.9,2Z" />
                            </svg>
                        </a>
                        <a href="https://www.linkedin.com/in/shiveksharma" target='_blank' className='hover:text-gray-400' aria-label='LinkedIn'>
                            <svg className='w-7 h-7' fill="none"  viewBox="0 0 16 16">
                                <path fill='#0A66C2' d="M12.225 12.225h-1.778V9.44c0-.664-.012-1.519-.925-1.519-.926 0-1.068.724-1.068 1.47v2.834H6.676V6.498h1.707v.783h.024c.348-.594.996-.95 1.684-.925 1.802 0 2.135 1.185 2.135 2.728l-.001 3.14zM4.67 5.715a1.037 1.037 0 01-1.032-1.031c0-.566.466-1.032 1.032-1.032.566 0 1.031.466 1.032 1.032 0 .566-.466 1.032-1.032 1.032zm.889 6.51h-1.78V6.498h1.78v5.727zM13.11 2H2.885A.88.88 0 002 2.866v10.268a.88.88 0 00.885.866h10.226a.882.882 0 00.889-.866V2.865a.88.88 0 00-.889-.864z" />
                            </svg>
                        </a>
                        <a href="http://www.x.com" target='_blank' className='hover:text-gray-400' aria-label='Twitter'>
                            <svg className='w-7 h-7' fill="currentColor" viewBox="0 0 24 24">
                                <path d="M22,5.8a8.49,8.49,0,0,1-2.36.64,4.13,4.13,0,0,0,1.81-2.27,8.21,8.21,0,0,1-2.61,1,4.1,4.1,0,0,0-7,3.74A11.64,11.64,0,0,1,3.39,4.62a4.16,4.16,0,0,0-.55,2.07A4.09,4.09,0,0,0,4.66,10.1,4.05,4.05,0,0,1,2.8,9.59v.05a4.1,4.1,0,0,0,3.3,4A3.93,3.93,0,0,1,5,13.81a4.9,4.9,0,0,1-.77-.07,4.11,4.11,0,0,0,3.83,2.84A8.22,8.22,0,0,1,3,18.34a7.93,7.93,0,0,1-1-.06,11.57,11.57,0,0,0,6.29,1.85A11.59,11.59,0,0,0,20,8.45c0-.17,0-.35,0-.53A8.43,8.43,0,0,0,22,5.8Z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer