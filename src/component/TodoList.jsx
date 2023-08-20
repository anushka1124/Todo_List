import React, { useState } from 'react'

const TodoList = () => {
    const [activity , setActivity] = useState('');
    const [listdata , setListdata] = useState([]);

    function addActivity() {
        // setListdata([...listdata , activity]);
        setListdata ((prev) => {
            const updatedList = [...prev , activity];
            console.log(updatedList)
            setActivity('');
            return updatedList;
        })
    }

    function removeActivity (index) {
        const updatedListData = listdata.filter((elements , id) => {
            return index != id;
        })

        setListdata(updatedListData);
    }
    function removeAll () {
        setListdata([]);
    }
  return (
    <div className=' text-center bg-[#c0d6df] w-[50%] m-auto  flex flex-col rounded-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
        <h1 className='bg-gray-200 rounded-md mx-[80px] text-gray-700 font-bold py-2 mt-10'>TODO LIST</h1>

        <div>
            <input 
            type="text"
            placeholder='Add Activity'
            value={activity}
            onChange={(event) => {
                setActivity(event.target.value);
            }}
            className='mt-10 bg-gray-300 px-5 py-1 rounded-md hover:bg-slate-100 focus:outline-0'
            />
            <button 
            onClick={addActivity}
            className='bg-[#477977] rounded-lg px-4 py-1 ml-2 hover:bg-[#b0d5c7]'
            >
                Add
            </button>
        </div>

        <p className='my-4 font-semibold font-serif'>Here is Your List 📃📃</p>

        {listdata != [] && listdata.map((data,index) => {
            return(
                <>
                <p
                key={index}
                className='flex text-center m-auto'
                >
                    <div className='bg-[#d7f0e9] py-1 px-[70px] rounded-md font-mono font-semibold'>{data}</div>
                    <div><button className='bg-[#477977] ml-4 rounded-md py-1 px-4 hover:bg-[#b0d5c7]' onClick={() => removeActivity(index)}>Remove(-)</button></div>
                </p>
                </>
            )
        })}
        {listdata.length >= 1 && <button className='bg-[#477977] mt-10 mb-4 rounded-md py-1 hover:bg-[#b0d5c7] mx-[250px]' onClick={removeAll}>Remove All</button>}        
    </div>
  )
}

export default TodoList
