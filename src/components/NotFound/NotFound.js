import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
    const style={
        width:0,
        height:0,
        border:0,

    }

    return (
        <div>
            <div className="container">
	
	<div  className="error">
		<p className="p">4</p>
		<span className="dracula">			
			<div className="con">
				<div className="hair"></div>
				<div className="hair-r"></div>
				<div className="head"></div>
    		<div className="eye"></div>
    		<div className="eye eye-r"></div>
  			<div className="mouth"></div>
  			<div className="blod"></div>
  			<div className="blod blod2"></div>
			</div>
		</span>
		<p className="p">4</p>
		
		<div className="page-ms">
			<p className="page-msg"> Oops, the page you're looking for Disappeared </p>
			<Link to='/home'>
            <button className="go-back">Go Home</button>
            </Link>
		</div>
</div>
	</div>

        <div>
        <iframe title='this is iframe' style={style} scrolling="no"  allow="autoplay" src="https://instaud.io/_/2Vvu.mp3"></iframe>
        </div>
        </div>
    );

//     return (
        
//         <div>
//         <div classNameName="flex items-center justify-center w-screen h-screen">
//   <div classNameName="px-4 lg:py-12">
//     <div classNameName="lg:gap-4 lg:flex">
//       <div
//         classNameName="flex flex-col items-center justify-center md:py-24 lg:py-32"
//       >
//         <h1 classNameName="font-bold text-blue-600 text-9xl">404</h1>
//         <p
//           classNameName="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl"
//         >
//           <span classNameName="text-red-500">Oops!</span> Page not found
//         </p>
//         <p classNameName="mb-8 text-center text-gray-500 md:text-lg">
//           The page you’re looking for doesn’t exist.
//         </p>
        
//       </div>
//       <div classNameName="mt-4">
//         <img
//           src="https://cdn.pixabay.com/photo/2016/11/22/23/13/black-dog-1851106__340.jpg"
//           alt="img"
//           classNameName="object-cover w-full h-full"
//         />
//       </div>
//       <Link to='/home'
//           classNameName="px-10 py-8 text-sm font-bold text-blue-800 bg-blue-100"
//           >Go home</Link>
//     </div>
//   </div>
// </div>
//         </div>
//    );
};

export default NotFound;