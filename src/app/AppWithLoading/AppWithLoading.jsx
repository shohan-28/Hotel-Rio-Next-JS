// import React, { useEffect, useState } from "react";
// import App from "../../App";
// import AnimationLoader from "./page";


// const AppWithLoading = () => {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setLoading(false);
//     }, 2000);

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div className="App">
//       {loading ? (
//         <div className="loading-wrapper">
//           <AnimationLoader />
//         </div>
//       ) : (
//         <App />
//       )}
//     </div>
//   );
// };

// export default AppWithLoading;
