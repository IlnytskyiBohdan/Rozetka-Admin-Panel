import { Container, Paper, Box } from "@mui/material";

import LoginForm from "../components/LoginForm/LoginForm";

const Login = () => {
  return (
    <Container
    sx={{
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}>
    <Paper sx={{ padding: 4, borderRadius: 3, textAlign: "center", width: 400 }}>
      <Box component='img' src={`${import.meta.env.BASE_URL}logoForm.svg`} alt='Logo' sx={{ mb: 8 }} />

      <LoginForm />
    </Paper>
  </Container>
  
);
};
export default Login;
