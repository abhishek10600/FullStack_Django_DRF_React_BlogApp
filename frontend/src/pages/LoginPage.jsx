import LoginForm from "../components/LoginComponent/LoginForm";

const LoginPage = () => {
  return (
    <div className="md:max-w-[1240px] md:mx-auto text-white">
      <h1 className="text-center md:text-4xl md:my-8 text-2xl my-6 font-bold">
        Login To Your Account
      </h1>
      <div className="form-container flex justify-center items-center">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
