/* eslint-disable react/no-unknown-property */

const Click = (clickBtn) => {
    // eslint-disable-next-line no-undef
     console.log('component con');
    return (
         <div>
               <button clickBtn={clickBtn}>Click</button>
        </div>
    );
};

export default Click;