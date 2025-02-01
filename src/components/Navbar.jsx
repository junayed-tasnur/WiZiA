import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  Box,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";

const Navbars = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const menuItems = ["About Us", "Pricing", "Customers", "Solutions"];

  return (
    <>
      <div>
        <AppBar
          elevation={0}
          position="static"
          sx={{
            backgroundColor: "#183A40",
          }}
        >
          <Toolbar>
            {isMobile ? (
              // Mobile View: Logo on left, toggle button on right
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                {/* Logo */}
                <Typography>
                  <img className="cursor-pointer" src="/Logo.png" alt="Logo" />
                </Typography>

                {/* Hamburger Menu */}
                <IconButton color="inherit" onClick={() => setOpen(true)}>
                  <MenuIcon />
                </IconButton>
              </Box>
            ) : (
              <>
                {/* Logo */}
                <Typography sx={{ flexGrow: 1 }}>
                  <img className="cursor-pointer" src="/Logo.png" alt="Logo" />
                </Typography>

                {/* Menu Items */}
                <Box sx={{ display: "flex", flexGrow: 1 }}>
                  {menuItems.map((item) => (
                    <Button color="inherit" key={item} sx={{ marginX: 2 }}>
                      {item}
                    </Button>
                  ))}
                </Box>

                {/* Buttons */}
                <Box sx={{ display: "flex", gap: 2 }}>
                  <Button
                    variant="outlined"
                    sx={{
                      color: "#000",
                      backgroundColor: "#0FF1F6",
                      borderRadius: "15px",
                      "&:hover": {
                        transition: "all 0.5s ease-in-out",
                        transform: "scale(1.05)",
                      },
                    }}
                  >
                    Book a Demo
                  </Button>
                  <Button
                    variant="outlined"
                    sx={{
                      color: "#fff",
                      backgroundColor: "#002228",
                      borderRadius: "10px",
                      "&:hover": {
                        fontWeight: "bold",
                        transition: "all 0.5s ease-in-out",
                        transform: "scale(1.05)",
                      },
                    }}
                  >
                    Contact Us
                  </Button>
                </Box>
              </>
            )}
          </Toolbar>
        </AppBar>

        {/* Drawer for Mobile View */}
        <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
          <List>
            {menuItems.map((item) => (
              <ListItem button key={item} onClick={() => setOpen(false)}>
                <ListItemText>{item}</ListItemText>
              </ListItem>
            ))}
            <ListItem button>
              <ListItemText primary="Contact Us" />
            </ListItem>
          </List>
        </Drawer>
      </div>
    </>
  );
};

export default Navbars;
