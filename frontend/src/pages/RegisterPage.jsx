import RegisterForm from "../components/RegisterComponent/RegisterForm";

const RegisterPage = () => {
  return (
    <div className="md:max-w-[1240px] md:mx-auto text-white">
      <h1 className="text-center md:text-4xl md:my-8 text-2xl my-6 font-bold">
        Create Your Account
      </h1>
      <div className="form-container flex justify-center items-center">
        <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterPage;
