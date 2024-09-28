import React, { useState } from 'react'
import { Button } from './ui/button'
import { Search } from 'lucide-react'
import { useDispatch } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
    const [ query, setQuery ] = useState();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const searchJobHandler = () => {
        dispatch(setSearchedQuery(query));
        navigate('/browse');
    }

    return (
        <div className='text-center'>
            <div className='flex flex-col gap-5 my-8'>
                <span className='mx-auto px-4 py-3 rounded-full bg-yellow-100 text-[#F83002] font-medium'>Welcome to JobSphere!</span>
                <h1 className='text-4xl font-bold my-5'>Search, Apply & <br /> Get Your <span className='text-[#6A38C2]'>Dream Jobs</span></h1>
                <p style={{ fontFamily: 'sans-serif' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam maiores voluptates vitae voluptatibus deserunt!</p>
                <div className='flex w-[30%] my-10 shadow-lg border border-orange-300 pl-4 rounded-full items-center gap-4 mx-auto'>
                    <input
                        type="text"
                        placeholder='Find Your Dream Jobs'
                        onChange={(e) => setQuery(e.target.value)}
                        className='outline-none border-none w-full'
                    />
                    <Button onClick={searchJobHandler} className='rounded-r-full'>
                        <Search className='h-5 w-5' />
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default HeroSection