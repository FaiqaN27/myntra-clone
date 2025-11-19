import React from 'react'
import { BsSearch } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { BsPerson } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
    const bag = useSelector((store) => store.bag);

    return (
        <header>
            <div className='logo_container'>
                <Link to="/"><img className='myntra_logo' src='/images/myntra_logo.webp' alt='Myntra-logo' /></Link>
            </div>

            <nav className='nav_bar'>
                <a href='#'>men</a>
                <a href='#'>women</a>
                <a href='#'>kids</a>
                <a href='#'>home & living</a>
                <a href='#'>beauty</a>
                <a href='#'>studio<sup>New</sup></a>
            </nav>

            <div className='search_bar'>
                <span className='search_icon'><BsSearch /></span>
                <input className='search_input' type='text' placeholder='Search for products,brands and more' />
            </div>

            <div className='action_bar'>
                <div className='action_container'>
                    <span className='icon'><BsPerson /></span>
                    <span className='action_name'>Profile</span>
                </div>
                <a className='action_container' href=''>
                    <span className='icon'><CiHeart /></span>
                    <span className='action_name'>Wishlist</span>
                </a>
                <Link className='action_container' to='/bag'>
                    <span className='icon'><HiOutlineShoppingBag /></span>
                    <span className='action_name'>Bag</span>
                    <span className='bag_item_count'>{bag.length}</span>
                </Link>
            </div>
        </header>
    )
}

export default Header