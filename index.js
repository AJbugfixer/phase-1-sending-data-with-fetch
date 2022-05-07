// Add your code here
function submitData(name, email) {
    const labData ={
        name: `${name}`,
        email: `${email}`,
    }

    const labDataObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify(labData),
    };

    return fetch("http://localhost:3000/users", labDataObject)
        .then(function (response) {
            return response.json();
        })
        .then(function (object){
            document.body.innerHTML = object.id;
        })
        .catch(function (error) {
            alert("Unauthorized Access");
            document.body.innerHTML = error.message;
        })
};

submitData()