import { useForm } from "react-hook-form";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import InputText from "../InputText/InputText";
import InputPassword from "../InputPassword/InputPassword";
import ButtonLogin from "../Buttons/ButtonLogin/ButtonLogin";
import useAuth from "../../hooks/useAuth";
import useDisableScroll from "../../hooks/useDisableScroll";

const LoginForm = () => {
  useDisableScroll();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { loading, error, login } = useAuth();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const result = await login(data);
      if (result.meta.requestStatus === "fulfilled") {
        navigate("/products-table");
      }
    } catch (err) {
      console.error("Login failed:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputText
        label='User Name'
        name='userName'
        register={register}
        errors={errors}
        sx={{ mb: 5 }}
      />
      <InputPassword register={register} errors={errors} sx={{ mb: 8 }} />
      {error && <Box sx={{ color: "red", mb: 2 }}>{error}</Box>}
      <ButtonLogin loading={loading} />
    </form>
  );
};

export default LoginForm;
