import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/slices/sliceUser";
import { selectAuthLoading, selectAuthError } from "../redux/selectors/selectors";

const useAuth = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectAuthLoading);
  const error = useSelector(selectAuthError);

  const login = async (data) => {
    return await dispatch(loginUser(data));
  };

  return { login, loading, error };
};

export default useAuth;