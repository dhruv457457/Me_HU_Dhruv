// import React from "react";
// import './DockNav.css';

// // SVG icons components remain the same...

// const sections = [
//   { id: "home", label: "Home", icon: <HomeIcon /> },
//   { id: "projects", label: "Projects", icon: <ProjectIcon /> },
//   { id: "skills", label: "Skills", icon: <SkillIcon /> },
//   { id: "achievements", label: "Achievements", icon: <AchievementIcon /> },
//   { id: "contact", label: "Contact", icon: <ContactIcon /> },
// ];

// const DockNav = () => {
//     const handleClick = (id) => {
//       document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
//     };
  
//     return (
//       <div className="dock-nav-container">
//         <div className="dock-nav-panel">
//           {sections.map((item) => (
//             <button
//               key={item.id}
//               onClick={() => handleClick(item.id)}
//               className="dock-nav-item"
//               aria-label={item.label}
//             >
//               <div className="dock-nav-icon">
//                 {item.icon}
//               </div>
//               <span className="dock-nav-label">
//                 {item.label}
//               </span>
//             </button>
//           ))}
//         </div>
//       </div>
//     );
//   };

// export default DockNav;