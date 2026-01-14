import React from 'react';

const Container: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="py-4 md:px-15 px-6 w-full">
            {children}
        </div>
    );
};

export default Container;