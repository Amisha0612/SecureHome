
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { HiMiniBellAlert } from 'react-icons/hi2';
// import sendEmail from '../server/mail';

const PanicButton = () => {
  const [loading, setLoading] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [name, setName] = useState("Please PRESS the button below");
  const [email, setEmail] = useState('amisha0160.be21@chitkara.edu.in');
  const [location, setLocation] = useState('');

  // useEffect(() => {
  //   if ('geolocation' in navigator) {
  //     navigator.geolocation.getCurrentPosition(async (position) => {
  //       const { latitude, longitude } = position.coords;
  //       try {
  //         const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyDtgRW6hiRzXSD-3Mxiv-Oq6369og98N6c`);
  //         if (response.data && response.data.results && response.data.results.length > 0) {
  //           const address = response.data.results[0].formatted_address;
  //           setLocation(address);
  //         } else {
  //           setLocation('Location not available');
  //         }
  //       } catch (error) {
  //         console.error('Error fetching location:', error);
  //         setLocation('Location not available');
  //       }
  //     });
  //   } else {
  //     alert('Geolocation is not available in your browser.');
  //   }
  // }, []);

  // useEffect(() => {
  //   if ('geolocation' in navigator) {
  //     navigator.geolocation.getCurrentPosition(async (position) => {
  //       const { latitude, longitude } = position.coords;
  //       const apiKey = '4a7e6b36266448fcbec53123afa022b4';
  //       const url = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}`;
  
  //       try {
  //         const response = await fetch(url);
  //         const data = await response.json();
  //         if (data.results && data.results.length > 0) {
  //           // const address = data.results[0].formatted;
  //           const addressComponents = data.results[0].components;
  //           const streetNumber = addressComponents.road || '';
  //           const streetName = addressComponents.road || '';
  //           const city = addressComponents.locality || '';
  //           const state = addressComponents.administrative_area_level_1 || '';
  //           const country = addressComponents.country || '';
  //           setLocation(`${streetNumber} ${streetName}, ${city}, ${state} ${country}`);
  //         } else {
  //           setLocation('Location not available');
  //         }
  //       } catch (error) {
  //         console.error('Error fetching location:', error);
  //         setLocation('Location not available');
  //       }
  //     });
  //   } else {
  //     alert('Geolocation is not available in your browser.');
  //   }
  // }, []);


  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;
        const apiKey = '4a7e6b36266448fcbec53123afa022b4';
        const url = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}`;
  
        try {
          const response = await fetch(url);
          const data = await response.json();
          if (data.results && data.results.length > 0) {
            const addressComponents = data.results[0].components;
            let location = '';
            if (addressComponents.road) location += `${addressComponents.road}, `;
            if (addressComponents.locality) location += `${addressComponents.locality}, `;
            if (addressComponents.administrative_area_level_1) location += `${addressComponents.administrative_area_level_1}, `;
            if (addressComponents.country) location += `${addressComponents.country}`;
            setLocation(location.trim());
          } else {
            setLocation('Location not available');
          }
        } catch (error) {
          console.error('Error fetching location:', error);
          setLocation('Location not available');
        }
      });
    } else {
      alert('Geolocation is not available in your browser.');
    }
  }, []);




  const handleClick = async () => {
    setClicked(!clicked);
    alert("Clicked Successfully");
    setName("Clicked Successfully");
    setLoading(true);

      // Log the values before sending the request
    console.log('Email:', email);
    console.log('Location:', location);

    try {
      const response = await axios.post('http://localhost:5000/api/panic', { email, location });
      alert('Activated');
      console.log('Response:', response.data);
      // const success = await sendEmail(location);
      // console.log('Email sent:', success);
    } catch (error) {
      console.error('Error:', error.response?.data || error.message);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main
      className="min-h-screen"
      style={{
        backgroundColor: clicked ? "red" : "white",
        textAlign: "center",
        color: clicked ? "white" : "black",
        height: "100vh",
        width: "100vw"
      }}
    >
      <div style={{ height: "100px", width: "99.8vw", border: "2px solid black" }}></div>
      <i>
        <p style={{ fontSize: "40px", marginTop: "10%" }}>
          <b>Having an Emergency?</b>
        </p>
      </i>
      <i>
        <b>
          <p style={{ fontSize: "20px" }}>{name}</p>
        </b>
      </i>
      <div
        style={{
          height: "300px",
          width: "300px",
          borderRadius: "50%",
          backgroundColor: "white",
          border: "2px solid black",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "20px",
          textAlign: "center",
          fontSize: "100px",
        }}
      >
        <button
          style={{
            marginTop: "80px",
            color: "black",
            height: "50%",
            width: "60%",
            backgroundColor: "white",
            border: "none",
            cursor: "pointer"
          }}
          onClick={handleClick}
          disabled={loading}
        >
          <HiMiniBellAlert style={{ height: "100%", width: "100%" }} />
        </button>
      </div>
    </main>
  );
};

export default PanicButton;


// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { HiMiniBellAlert } from 'react-icons/hi2';

// const PanicButton = ({ location, address }) => {
//   const [loading, setLoading] = useState(false);
//   const [clicked, setClicked] = useState(false);
//   const [name, setName] = useState("Please PRESS the button below");
//   const [email, setEmail] = useState('amisha0160.be21@chitkara.edu.in');
//   const [location, setLocation] = useState('');
//   const [latitude, setLatitude] = useState('');
//   const [longitude, setLongitude] = useState('');

//   useEffect(() => {
//     if ('geolocation' in navigator) {
//       navigator.geolocation.getCurrentPosition(async (position) => {
//         const { latitude, longitude } = position.coords;
//         setLatitude(latitude);
//         setLongitude(longitude);
//         try {
//           const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyDhwyMaOyKC8-b_N0_4VFeyBUegiYBYsP8`);
//           if (response.data && response.data.results && response.data.results.length > 0) {
//             const address = response.data.results[0].formatted_address;
//             setLocation(address);
//           } else {
//             setLocation('Location not available');
//           }
//         } catch (error) {
//           console.error('Error fetching location:', error);
//           setLocation('Location not available');
//         }
//       });
//     } else {
//       alert('Geolocation is not available in your browser.');
//     }
//   }, []);

//   const handleClick = async () => {
//     setClicked(!clicked);
//     alert("Clicked Successfully");
//     setName("Clicked Successfully");
//     setLoading(true);

//     // Log the values before sending the request
//     console.log('Email:', email);
//     console.log('Location:', location);
//     console.log('Latitude:', latitude);
//     console.log('Longitude:', longitude);

//     try {
//       const response = await axios.post('http://localhost:5000/api/panic', { email, location, latitude, longitude });
//       alert('Activated');
//       console.log('Response:', response.data);
//     } catch (error) {
//       console.error('Error:', error.response?.data || error.message);
//       alert("Something went wrong");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <main
//       className="min-h-screen"
//       style={{
//         backgroundColor: clicked ? "red" : "white",
//         textAlign: "center",
//         color: clicked ? "white" : "black",
//         height: "100vh",
//         width: "100vw"
//       }}
//     >
//       <div style={{ height: "100px", width: "99.8vw", border: "2px solid black" }}></div>
//       <i>
//         <p style={{ fontSize: "40px", marginTop: "10%" }}>
//           <b>Having an Emergency?</b>
//         </p>
//       </i>
//       <i>
//         <b>
//           <p style={{ fontSize: "20px" }}>{name}</p>
//         </b>
//       </i>
//       <div
//         style={{
//           height: "300px",
//           width: "300px",
//           borderRadius: "50%",
//           backgroundColor: "white",
//           border: "2px solid black",
//           marginLeft: "auto",
//           marginRight: "auto",
//           marginTop: "20px",
//           textAlign: "center",
//           fontSize: "100px",
//         }}
//       >
//         <button
//           style={{
//             marginTop: "80px",
//             color: "black",
//             height: "50%",
//             width: "60%",
//             backgroundColor: "white",
//             border: "none",
//             cursor: "pointer"
//           }}
//           onClick={handleClick}
//           disabled={loading}
//         >
//           <HiMiniBellAlert style={{ height: "100%", width: "100%" }} />
//         </button>
//       </div>
//     </main>
//   );
// };

// export default PanicButton;







// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { HiMiniBellAlert } from 'react-icons/hi2';

// const PanicButton = () => {
//   const [loading, setLoading] = useState(false);
//   const [clicked, setClicked] = useState(false);
//   const [name, setName] = useState("Please PRESS the button below");
//   const [email, setEmail] = useState('amisha0160.be21@chitkara.edu.in');
//   const [location, setLocation] = useState('');
//   const [latitude, setLatitude] = useState('');
//   const [longitude, setLongitude] = useState('');

//   useEffect(() => {
//     if ('geolocation' in navigator) {
//       navigator.geolocation.getCurrentPosition(async (position) => {
//         const { latitude, longitude } = position.coords;
//         setLatitude(latitude);
//         setLongitude(longitude);
//         try {
//           const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyDhwyMaOyKC8-b_N0_4VFeyBUegiYBYsP8`);
//           if (response.data && response.data.results && response.data.results.length > 0) {
//             // const address = response.data.results[0].formatted_address;
//             const addressComponents = response.data.results[0].address_components;
//             const streetNumber = addressComponents.find(component => component.types.includes('street_number')).long_name;
//             const route = addressComponents.find(component => component.types.includes('route')).long_name;
//             const city = addressComponents.find(component => component.types.includes('locality')).long_name;
//             const state = addressComponents.find(component => component.types.includes('administrative_area_level_1')).long_name;
//             const country = addressComponents.find(component => component.types.includes('country')).long_name;
//             setLocation(`${streetNumber} ${route}, ${city}, ${state}, ${country}`);
//           } else {
//             setLocation('Location not available');
//           }
//         } catch (error) {
//           console.error('Error fetching location:', error);
//           setLocation('Location not available');
//         }
//       });
//     } else {
//       alert('Geolocation is not available in your browser.');
//     }
//   }, []);

//   const handleClick = async () => {
//     setClicked(!clicked);
//     alert("Clicked Successfully");
//     setName("Clicked Successfully");
//     setLoading(true);

//     // Log the values before sending the request
//     console.log('Email:', email);
//     console.log('Location:', location);
//     console.log('Latitude:', latitude);
//     console.log('Longitude:', longitude);

//     try {
//       const response = await axios.post('http://localhost:5000/api/panic', { email, location, latitude, longitude });
//       alert('Activated');
//       console.log('Response:', response.data);
//     } catch (error) {
//       console.error('Error:', error.response?.data || error.message);
//       alert("Something went wrong");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <main
//       className="min-h-screen"
//       style={{
//         backgroundColor: clicked? "red" : "white",
//         textAlign: "center",
//         color: clicked? "white" : "black",
//         height: "100vh",
//         width: "100vw"
//       }}
//     >
//       <div style={{ height: "100px", width: "99.8vw", border: "2px solid black" }}></div>
//       <i>
//         <p style={{ fontSize: "40px", marginTop: "10%" }}>
//           <b>Having an Emergency?</b>
//         </p>
//       </ i>
//       <i>
//         <b>
//           <p style={{ fontSize: "20px" }}>{name}</p>
//         </b>
//       </i>
//       <div
//         style={{
//           height: "300px",
//           width: "300px",
//           borderRadius: "50%",
//           backgroundColor: "white",
//           border: "2px solid black",
//           marginLeft: "auto",
//           marginRight: "auto",
//           marginTop: "20px",
//           textAlign: "center",
//           fontSize: "100px",
//         }}
//       >
//         <button
//           style={{
//             marginTop: "80px",
//             color: "black",
//             height: "50%",
//             width: "60%",
//             backgroundColor: "white",
//             border: "none",
//             cursor: "pointer"
//           }}
//           onClick={handleClick()}
//           disabled={loading}
//         >
//           <HiMiniBellAlert style={{ height: "100%", width: "100%" }} />
//         </button>
//       </div>
//     </main>
//   );
// };

// export default PanicButton;