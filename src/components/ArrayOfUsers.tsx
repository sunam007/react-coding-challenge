/**
  Challenge: Display all users to the browser
  Small Hint: Use array map with react key
**/

const users = [
    { name: "John Doe", id: 1 },
    { name: "Jane Doe", id: 2 },
    { name: "Billy Doe", id: 3 }
];

const ArrayOfUsers = () => {
    return (
        <>
            <h3>User names</h3>
            <ul></ul>
        </>
    );
};

export default ArrayOfUsers;