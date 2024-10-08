import React, { useState, useEffect } from "react";
import "../index.css";
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Class } from "@mui/icons-material";

const theme = createTheme({
  typography: {
    fontFamily: "Montserrat, sans-serif",
  },
});

function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [navbarColor, setNavbarColor] = useState("transparent");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setNavbarColor("rgba(255, 255, 255, 0.3)"); // Cambia a blanco con opacidad
      } else {
        setNavbarColor("transparent"); // Vuelve a transparente
      }
    };

    const updateNavbarHeight = () => {
      const navbarHeight = document.querySelector('.custom-toolbar').offsetHeight;
      document.documentElement.style.setProperty('--navbar-height', `${navbarHeight}px`);
    };

    // Establecer la altura inicial del Navbar
    updateNavbarHeight();

    // Usar ResizeObserver para actualizar la altura en cambios de tamaño
    const resizeObserver = new ResizeObserver(updateNavbarHeight);
    const navbarElement = document.querySelector('.custom-toolbar');
    if (navbarElement) {
      resizeObserver.observe(navbarElement);
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (navbarElement) {
        resizeObserver.unobserve(navbarElement);
      }
    };
  }, []);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuItems = [
    { label: "Find Instructors ", onClick: () => scrollToSection("find") },
    { label: "Packages ", onClick: () => scrollToSection("packages") },
    { label: "FAQs ", onClick: () => scrollToSection("questions"), hidden: true }, // Agregado 'hidden'
    { label: "Blog ", onClick: () => scrollToSection("blog") },
    { label: "Contact us ", onClick: () => scrollToSection("contact") },
  ];

  return (
    <>
      <div className="" id="alusur">
        <ThemeProvider theme={theme}>
          <Box className="nabvar-container  ">
            <AppBar
              sx={{
                backgroundColor: navbarColor,
                transition: "background-color 1.5s ease", // Agrega esta línea para la transición
                boxShadow: "none",
              }}
              elevation={0}
            >
              <Toolbar className="custom-toolbar navbar2">
                <div
                  className="logo"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <img
                    src="/arcticons_srilankan.png"
                    alt="logo"
                    style={{ marginRight: "10px" }}
                  />
                  <p
                    style={{
                      paddingTop: "14px",
                      fontFamily: "Canopee",
                      fontSize: "22px",
                      fontWeight: 400,
                      lineHeight: "42.98px",
                      textAlign: "center",
                    }}
                  >
                    Arugam Bay Surf
                  </p>
                </div>

                <div className="one">
                  {" "}
                  <IconButton // boton hamburguesa
                    // edge="start"
                    // color="inherit"
                    // aria-label="menu"
                    sx={{
                      mr: 2,
                      mt: 0,
                      display: { xs: "block", sm: "none", md: "none" },
                      color: "white",
                      backgroundColor: "black",
                      borderRadius: "30%",
                      padding: "8px",
                      "&:hover": {
                        backgroundColor: "white",
                      },
                    }}
                    onClick={toggleDrawer(true)}
                  >
                    <MenuIcon />
                  </IconButton>
                </div>
                {/* <div className="two">Logo</div> */}

                <div className="divPadreBox  ">
                  <Box
                    className="button-container"
                    sx={{ display: { xs: "none", sm: "flex", md: "flex" } }}
                  >
                    {menuItems.map((item) => (
                      <Button
                        key={item.label}
                        className="custom-button"
                        sx={{
                          color: "white",
                          fontFamily: "Open Sans",
                          fontSize: "15px",
                          fontWeight: 400,
                          lineHeight: "21.79px",
                          textAlign: "center",
                          display: item.hidden ? { xs: "none", sm: "none", md: "flex", lg: "flex" } : "flex", // Modificado para ocultar
                        }}
                        onClick={item.onClick}
                      >
                        {item.label}
                      </Button>
                    ))}
                  </Box>
                </div>
                <div className="three">
                  <button className="button1" style={{ border: "none" }}>
                    Join as Instructor
                  </button>
                </div>
              </Toolbar>
            </AppBar>
          </Box>
          <Drawer
            anchor="top"
            open={drawerOpen}
            onClose={toggleDrawer(false)}
            sx={{
              "& .MuiDrawer-paper": {
                width: "100%",
                maxHeight: "100%",
                backgroundColor: "black",
              },
            }}
          >
            <List>
              {menuItems.map((item) => (
                <ListItem
                  button
                  key={item.label}
                  onClick={() => {
                    item.onClick();
                    toggleDrawer(false)();
                  }}
                >
                  <ListItemText
                    primary={item.label}
                    sx={{
                      color: "white",
                      fontFamily: "Open Sans",
                      fontSize: "26px",
                      fontWeight: 400,
                      lineHeight: "21.79px",
                      textAlign: "center",
                    }}
                  />
                </ListItem>
              ))}
            </List>
          </Drawer>
        </ThemeProvider>
      </div>
      <div id="empresa"></div>
    </>
  );
}

export default Navbar;
