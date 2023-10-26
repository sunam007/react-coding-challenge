/**
  Challenge: Show entire Child component content inside Parent component. Only add code on Parent Component below
**/

import ParentComponent from './ParentComponent';
import ChildrenComponent from './ChildrenComponent';

const ReactChildrenChallenge = () => {
  return (
    <ParentComponent>
      <ChildrenComponent />
    </ParentComponent>
  );
};

export default ReactChildrenChallenge;