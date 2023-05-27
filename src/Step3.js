import React from 'react'
function Step3(props) {
    return (
        <div className='step3'>
            Step3
            <button onClick={() => {
                props.navigatorRef.changePage("step2", {
                    timeAnimationInMS: 10000
                });
            }} >
                Back
            </button>
        </div>
    )
}
export default Step3