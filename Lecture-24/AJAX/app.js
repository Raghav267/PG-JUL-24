fetch("https://api.hostelduniya.com/api/hostel/rooms?hostel_id=1")
    .then((res) => {
        return res.json();
    })
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    })