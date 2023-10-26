const url = "https://jsonplaceholder.typicode.com/users/1";
/** 
  // Sample Response
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org"
  }
**/

/** 
  Challenge: Given the url above, make this app fetch the data and display them in the browser (Small Hint: use `React.useEffect and fetch api`)
**/


const FetchData = () => {
    return (
        <div className="App">
        <h2>User Data</h2>
        <p>
          <strong>Name: </strong>{" "}
          {"(Need to populate name here)"}
        </p>
        <p>
          <strong>Website: </strong>
          {"(Need to populate website here)"}
        </p>
        <p>
          <strong>Email: </strong>
          {"(Need to populate email here)"}
        </p>
        <p>
          <strong>Phone: </strong>
          {"(Need to populate phone here)"}
        </p>
      </div>
    );
};

export default FetchData;