/** 
  Challenge: User should be able to type in any characters on input and those character should show in the browser.
**/

const TwoWayDataBinding = () => {
    return (
        <>
        <input type="text" placeholder="Enter your name" />
        {/* show your name in this p tag */}
        <p></p>
      </>
    );
};

export default TwoWayDataBinding;