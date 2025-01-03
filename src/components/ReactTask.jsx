import React from 'react'

const ReactTask = () => {
    function addNumbers() {
        return num1 + num2;
    }
    const num1 = 20;
    const num2 = 20;
    const result = addNumbers(num1, num2);

    const printTableOfTwo = () => {
        const table = [];
        for (let i = 1; i <= 10; i++) {
            table.push(<li key={i}>2 * {i} = {2 * i}</li>);
        }
        return table;
    };

    const printStars = () => {
        const rows = 4;
        const columns = 5;
        const starPattern = [];

        for (let i = 0; i < rows; i++) {
            let row = "";

            for (let j = 0; j < columns; j++) {
                row += "* ";
            }

            starPattern.push(<li key={i}>{row}</li>);
        }

        return starPattern;
    };


    return (
        <div className='bg-black min-h-screen lg:py-12 py-10 flex items-center justify-center'>
            <div className='max-w-[1280px] mx-auto flex flex-col items-center justify-center px-4'>
                <div className='pb-8 text-white'>
                    <h2 className='text-center lg:text-3xl text-2xl mb-3'>This is a Funtion with two arguments and two numbers are added</h2>
                    <p className='text-center text-xl'>The result of {num1} + {num2} = {result}</p>
                </div>

                <div className='text-white pb-8 text-xl flex flex-col items-center'>
                    <h2 className='lg:text-3xl text-2xl text-center mb-3'>Table of 2:</h2>
                    <ul className='text-start text-xl'>
                        {printTableOfTwo()}
                    </ul>
                </div>

                <div className='text-white mx-auto'>
                    <h2 className='lg:text-3xl text-2xl text-center mb-3'>Stars with 4 Rows and 5 Columns</h2>
                    <ul className='text-center text-xl'>
                        {printStars()}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ReactTask;