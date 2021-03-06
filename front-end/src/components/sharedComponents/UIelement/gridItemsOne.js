import * as React from "react";

import Paper from "@mui/material/Paper";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

import { Typography } from "@mui/material";

function myFunction() {
  alert("I am an alert box!");
}
function myFunction1() {
  window.open("http://localhost:3000/AllFiscalDevices", "_self");
}

const GridItemAdmin = () => {
  return (
    <>
      <Grid item xs={6} md={4}>
        <Box
          padding={3}
          sx={{ textAlign: "center", justifyContent: "space-evenly" }}
        >
          <Typography variant='h6' component='h4'>
            <Button variant='contained' onClick={myFunction1}>
              Редакция данни сервизна фирма
            </Button>
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={6} md={4}>
        <Box
          padding={3}
          sx={{ textAlign: "center", justifyContent: "space-evenly" }}
        >
          <Typography variant='h6' component='h4'>
            <Button variant='contained' onClick={myFunction}>
              Редакция бланка договор
            </Button>
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={6} md={4}>
        <Box
          padding={3}
          sx={{ textAlign: "center", justifyContent: "space-evenly" }}
        >
          <Typography variant='h6' component='h4'>
            <Button variant='contained'>Редакция бланка свидетелство</Button>
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={6} md={4}>
        <Box
          padding={3}
          sx={{ textAlign: "center", justifyContent: "space-evenly" }}
        >
          <Typography variant='h6' component='h4'>
            <Button variant='contained'>Добавяне на нов тип ФУ</Button>
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={6} md={4}>
        <Box
          padding={3}
          sx={{ textAlign: "center", justifyContent: "space-evenly" }}
        >
          <Typography variant='h6' component='h4'>
            <Button variant='contained'>Данни за нов обект</Button>
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={6} md={4}>
        <Box
          padding={3}
          sx={{ textAlign: "center", justifyContent: "space-evenly" }}
        >
          <Typography variant='h6' component='h4'>
            <Button variant='contained'>Данни за нов обект</Button>
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={6} md={4}>
        <Box
          padding={3}
          sx={{ textAlign: "center", justifyContent: "space-evenly" }}
        >
          <Typography variant='h6' component='h4'>
            <Button variant='contained'>Данни за нов обект</Button>
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={6} md={4}>
        <Box
          padding={3}
          sx={{ textAlign: "center", justifyContent: "space-evenly" }}
        >
          <Typography variant='h6' component='h4'>
            <Button variant='contained'>Данни за нов обект</Button>
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={6} md={4}>
        <Box
          padding={3}
          sx={{ textAlign: "center", justifyContent: "space-evenly" }}
        >
          <Typography variant='h6' component='h4'>
            <Button variant='contained'>Данни за нов обект</Button>
          </Typography>
        </Box>
      </Grid>
    </>
  );
};

export default GridItemAdmin;
