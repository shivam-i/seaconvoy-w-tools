// import React, { useState } from "react";
// import NavBar from "../../components/NavBar/NavBar";
// import "./HydrofoilSimulator.css";

// const HydrofoilSimulator = () => {
//   const [videoUrl, setVideoUrl] = useState(null);
//   const [showVideoModal, setShowVideoModal] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const {target} = e;

//     let amplitude = [];
//     let phase = [];
//     let timePeriod = document.querySelector('#time-period').value;

//     for(let i = 0; i < 4; i++){
//       amplitude.push(document.querySelector(`#amp-m${i+1}`).value);
//       phase.push(document.querySelector(`#phase-m${i+1}`).value)
//     }

//     console.log(amplitude);
//     console.log(phase);
//     console.log(timePeriod)

//     try {
//       const response = await fetch(
//         "http://127.0.0.1:5000/hydrofoil-simulator/",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             amplitude: amplitude,
//             phase: phase,
//             time_period: timePeriod,
//           }),
//         }
//       );
//       if (!response.ok) {
//         throw new Error("Failed to fetch video");
//       }
//       const videoBlob = await response.blob();
//       const videoObjectURL = URL.createObjectURL(videoBlob);
//       setVideoUrl(videoObjectURL);
//       setShowVideoModal(true);
//     } catch (error) {
//       console.error("Error:", error);
//       // Handle errors here
//     }
//   };

//   const handleCloseModal = () => {
//     setVideoUrl(null);
//     setShowVideoModal(false);
//   };

//   return (
//     <div className="simulator-container">
//       <NavBar />
//       <div className="simulator">
//         <p className="simulator-title">Flexible Hydrofoil Simulator</p>
//         <form className="simulator-form" onSubmit={handleSubmit}>
//           <p>Motor</p>
//           <p>Amplitude</p>
//           <p>Phase</p>
//           <p>Time Period</p>

//           <p>M1</p>
//           <input
//             type="number"
//             name=""
//             id="amp-m1"
//             min={-35}
//             max={+35}
//             step={0.01}
//             required
//           />

//           <input
//             type="number"
//             name=""
//             id="phase-m1"
//             min={-180}
//             max={180}
//             step={0.01}
//             required
//           />

//           <input type="number" name="" id="time-period" min={2} step={0.01} required />

//           <p>M2</p>
//           <input
//             type="number"
//             name=""
//             id="amp-m2"
//             min={-35}
//             max={+35}
//             step={0.01}
//             required
//           />
//           <input
//             type="number"
//             name=""
//             id="phase-m2"
//             min={-180}
//             max={180}
//             step={0.01}
//             required
//           />

//           <p>M3</p>
//           <input
//             type="number"
//             name=""
//             id="amp-m3"
//             min={-35}
//             max={+35}
//             step={0.01}
//             required
//           />
//           <input
//             type="number"
//             name=""
//             id="phase-m3"
//             min={-180}
//             max={180}
//             step={0.01}
//             required
//           />

//           <p>M4</p>
//           <input
//             type="number"
//             name=""
//             id="amp-m4"
//             min={-35}
//             max={+35}
//             step={0.01}
//             required
//           />
//           <input
//             type="number"
//             name=""
//             id="phase-m4"
//             min={-180}
//             max={180}
//             step={0.01}
//             required
//           />

//           <button
//             className="hydrolic-submit-btn"
//             type="submit"
//             onClick={handleSubmit}
//           >
//             Submit
//           </button>
//         </form>
//         {showVideoModal && (
//           <div className="video-modal">
//             <div className="video-content">
//               <video controls>
//                 <source src={videoUrl} type="video/mp4" />
//                 Your browser does not support the video tag.
//               </video>
//               <button className="close-btn" onClick={handleCloseModal}>
//                 Close
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default HydrofoilSimulator;

import React, { useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import "./HydrofoilSimulator.css";

const HydrofoilSimulator = () => {
  const [videoUrl, setVideoUrl] = useState(null);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [formData, setFormData] = useState({
    amplitudes: Array(4).fill(0),
    phases: Array(4).fill(0),
    timePeriod: 0.0,
  });

  // const handleInputChange = (e) => {
  //   const { id, value } = e.target;
  //   const motorNumber = parseFloat(id.replace("amp-m", ""));
  //   const field = id.includes("amp") ? "amplitudes" : "phases";
  //   setFormData({
  //     ...formData,
  //     [field]: formData[field].map((val, index) => {
  //       return index === motorNumber - 1 ? parseFloat(value) : val;
  //     }),
  //   });
  // };

  const handleAmplitudeChange = (e) => {
    const { id, value } = e.target;
    const motorNumber = parseInt(id.match(/\d+/)[0], 10) - 1;
    setFormData((prevFormData) => ({
      ...prevFormData,
      amplitudes: prevFormData.amplitudes.map((val, index) =>
        index === motorNumber ? parseFloat(value) : val
      ),
    }));
  };

  const handlePhaseChange = (e) => {
    const { id, value } = e.target;
    const motorNumber = parseInt(id.match(/\d+/)[0], 10) - 1;
    setFormData((prevFormData) => ({
      ...prevFormData,
      phases: prevFormData.phases.map((val, index) =>
        index === motorNumber ? parseFloat(value) : val
      ),
    }));
  };

  const handleTimePeriodChange = (e) => {
    console.log(formData);
    setFormData({
      ...formData,
      timePeriod: parseFloat(e.target.value),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://127.0.0.1:5000/hydrofoil-simulator/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to fetch video");
      }
      const videoBlob = await response.blob();
      console.log(videoBlob);
      const videoObjectURL = URL.createObjectURL(videoBlob);
      setVideoUrl(videoObjectURL);
      setShowVideoModal(true);
    } catch (error) {
      console.error("Error:", error);
      // Handle errors here
    }
  };

  const handleCloseModal = () => {
    setVideoUrl(null);
    setShowVideoModal(false);
  };

  return (
    <div className="simulator-container">
      <NavBar />
      <div className="simulator">
        <p className="simulator-title">Flexible Hydrofoil Simulator</p>
        <form className="simulator-form" onSubmit={handleSubmit}>
          <p>Motor</p>
          <p>Amplitude</p>
          <p>Phase</p>
          <p>Time Period</p>

          {[1, 2, 3, 4].map((motor) => (
            <>
              <p className={`motor${motor}`}>M{motor}</p>
              <input
                type="number"
                id={`amp-m${motor}`}
                min={-35}
                max={+35}
                step={0.01}
                value={formData.amplitudes[motor - 1]}
                onChange={handleAmplitudeChange}
                required
              />
              <input
                type="number"
                id={`phase-m${motor}`}
                min={-180}
                max={180}
                step={0.01}
                value={formData.phases[motor - 1]}
                onChange={handlePhaseChange}
                required
              />
            </>
          ))}
          <input
            type="number"
            id="time-period"
            min={2}
            step={0.01}
            value={formData.timePeriod}
            onChange={handleTimePeriodChange}
            required
          />

          <button className="hydrolic-submit-btn" type="submit">
            Submit
          </button>
        </form>
        {showVideoModal && (
          <div className="video-modal">
            <div className="video-content">
              <video controls>
                <source src={videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <button className="close-btn" onClick={handleCloseModal}>
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HydrofoilSimulator;
