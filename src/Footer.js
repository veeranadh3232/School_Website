// import React from "react";
// import { Box, Container, Grid, Typography } from "@mui/material";

// const Footer = () => {
//   return (
//     <Box
//       component="footer"
//       sx={{
//         backgroundColor: "#1a3423",
//         color: "#fff",
//         padding: "50px 0",
//         boxShadow: "0 10px 15px rgba(0, 0, 0, 0.1)",
//       }}
//     >
//       <Container maxWidth="xl">
//         <Grid container spacing={4}>
//           <Grid item xs={12} md={3} sx={{ textAlign: "center" }}>
//             <img
//               src="https://idpscherukupalli.com/assets/img/idpsfooter.png"
//               alt="Footer Logo"
//               style={{ width: "220px" }}
//             />
//           </Grid>
//           <Grid item xs={12} md={3}>
//             <Typography variant="h5" sx={{ color: "#50cb38", fontWeight: 900 }}>
//               Our Helpline
//             </Typography>
//             <Typography component="address" sx={{ fontStyle: "normal" }}>
//               <strong style={{ color: "#99cb8e" }}>PARENTS HELP LINE DESK</strong>
//               <br />
//               Mobile No: +91-9848000371
//               <br />
//               <br />
//               <strong style={{ color: "#99cb8e" }}>RECEPTION HELPLINE</strong>
//               <br />
//               Mobile/WhatsApp: 7799 7979 31, 7799 7979 32
//               <br />
//               Landline No: 08648293020
//               <br />
//               <br />
//               <strong style={{ color: "#99cb8e" }}>PLEASE EMAIL YOUR QUERIES</strong>
//               <br />
//               info@idpscherukupalli.com
//             </Typography>
//           </Grid>
//           <Grid item xs={12} md={3}>
//             <Typography component="ul" sx={{ listStyle: "none", padding: 0 }}>
//               <li>
//                 <strong style={{ color: "#99cb8e" }}>FOR ADMISSION</strong>
//                 <br />
//                 Mobile/WhatsApp: +91-7075164143
//                 <br />
//                 admissions@idpscherukupalli.com
//               </li>
//               <br />
//               <li>
//                 <strong style={{ color: "#99cb8e" }}>RECRUITMENT HELPLINE</strong>
//                 <br />
//                 Mobile/WhatsApp: +91-7032344143
//                 <br />
//                 recruitment@idpscherukupalli.com
//               </li>
//             </Typography>
//           </Grid>
//           <Grid item xs={12} md={3}>
//             <Typography variant="h5" sx={{ color: "#50cb38", fontWeight: 900 }}>
//               Our Address
//             </Typography>
//             <Typography component="address" sx={{ fontStyle: "normal" }}>
//               DR NO 9-168 CHERUKUPALLI (V) CHERUKUPALLI (M) GUNTUR DISTRICT NEAR
//               JAIHIND TAIKIES GUNTUR
//               <br />
//               ANDHRA PRADESH-INDIA,
//               <br />
//               PIN 522309
//               <br />
//               <br />
//               <strong style={{ color: "#fff" }}>Email ID: Info@idpscherukupalli.com</strong>
//             </Typography>
//           </Grid>
//         </Grid>
//         <Box
//           sx={{
//             marginTop: "30px",
//             borderTop: "1px solid #444",
//             paddingTop: "20px",
//             textAlign: "center",
//           }}
//         >
//           <Typography>&copy; 2024 Your Company. All rights reserved.</Typography>
//         </Box>
//       </Container>
//     </Box>
//   );
// };

// export default Footer;


import React from "react";
import { Box, Container, Grid, Typography, Link, Divider } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "gray",
        color: "#fff",
        padding: "40px 0 20px",
        boxShadow: "0 10px 15px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Container maxWidth="xl">
        {/* Top Section */}
        <Grid container spacing={4} justifyContent="space-between">
          {/* Logo Section */}
          <Grid item xs={12} md={3} sx={{ textAlign: "center" }}>
            <img
              src="https://idpscherukupalli.com/assets/img/idpsfooter.png"
              alt="Footer Logo"
              style={{ width: "220px", marginBottom: "10px" }}
            />
            <Typography variant="body2" sx={{ color: "white", fontSize: "14px" }}>
              Inspiring future leaders with quality education.
            </Typography>
          </Grid>

          {/* Helpline Section */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ color: "#00a3e0", fontWeight: 700, marginBottom: "10px" }}>
              Our Helpline
            </Typography>
            <Typography component="p" sx={{ fontSize: "14px", lineHeight: 1.8 }}>
              <strong style={{ color: "white" }}>Parents Help Line Desk:</strong>
              <br /> Mobile: +91-9848000371
              <br />
              <br />
              <strong style={{ color: "white" }}>Reception Helpline:</strong>
              <br /> WhatsApp: 7799 7979 31 / 32
              <br /> Landline: 08648293020
              <br />
              <br />
              <strong style={{ color: "white" }}>Email Queries:</strong>
              <br /> info@idpscherukupalli.com
            </Typography>
          </Grid>

          {/* Admissions & Recruitment */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ color: "#00a3e0", fontWeight: 700, marginBottom: "10px" }}>
              Quick Links
            </Typography>
            <ul style={{ listStyle: "none", padding: 0, lineHeight: 2 }}>
              <li>
                <strong style={{ color: "white" }}>For Admission:</strong>
                <br /> WhatsApp: +91-7075164143
                <br />
                <Link
                  href="mailto:admissions@idpscherukupalli.com"
                  sx={{ color: "#50cb38", textDecoration: "none", fontSize: "14px" }}
                >
                  admissions@idpscherukupalli.com
                </Link>
              </li>
              <li style={{ marginTop: "10px" }}>
                <strong style={{ color: "white" }}>Recruitment Helpline:</strong>
                <br /> WhatsApp: +91-7032344143
                <br />
                <Link
                  href="mailto:recruitment@idpscherukupalli.com"
                  sx={{ color: "white", textDecoration: "none", fontSize: "14px" }}
                >
                  recruitment@idpscherukupalli.com
                </Link>
              </li>
            </ul>
          </Grid>

          {/* Address Section */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ color: "#00a3e0", fontWeight: 700, marginBottom: "10px" }}>
              Our Address
            </Typography>
            <Typography component="p" sx={{ fontSize: "14px", color:'white', lineHeight: 1.8 }}>
              DR NO 9-168, CHERUKUPALLI (V), <br />
              GUNTUR DISTRICT, NEAR JAIHIND TAIKIES, <br />
              ANDHRA PRADESH, INDIA, <br />
              PIN: 522309
              <br />
              <br />
              <strong>Email:</strong>{" "}
              <Link
                href="mailto:info@idpscherukupalli.com"
                sx={{ color: "white", textDecoration: "none" }}
              >
                info@idpscherukupalli.com
              </Link>
            </Typography>
          </Grid>
        </Grid>

        {/* Divider */}
        <Divider sx={{ backgroundColor: "#444", margin: "20px 0" }} />

        {/* Bottom Section */}
        <Box textAlign="center">
          <Typography
            variant="body2"
            sx={{ fontSize: "14px", color: "white", marginBottom: "10px" }}
          >
            &copy; 2024 IDPS Cherukupalli. All Rights Reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
