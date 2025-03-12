import React from 'react';
import logoBlanco from '../assets/images/isologo-online-blanco.svg';

function Loader() {
    return (
        <div className="fixed inset-0 bg-black z-[100] flex items-center justify-center">
            <img
                src={logoBlanco}
                alt="Loading..."
                className="w-32 h-32 animate-pulse"
            />
        </div>
    );
}

export default Loader; 