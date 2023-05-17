import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const i = 1;

const theme = createTheme();

export default function Album() {
  const handleViewClick = () => {
    // Redirect to another webpage
    window.location.href = 'https://www.regions.com/insights/personal/personal-finances/budgeting-and-saving/10-best-ways-to-save-money';
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h8" color="inherit" noWrap>
            HelpMe
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 4,
            pb: 8,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Knowledge Articles
            </Typography>
          </Container>
        </Box>
        <Container sx={{ py: 1 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    image="https://cdn.pixabay.com/photo/2017/09/07/08/54/money-2724241__340.jpg"
                    alt="random"
                  />

                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5">
                      Easy and effective ways to save money
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button fullWidth onClick={handleViewClick}>
                      View
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
}
