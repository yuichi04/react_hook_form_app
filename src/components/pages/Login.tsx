import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";

type LoginState = {
  email: string;
  password: string;
};

const Login: FC = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginState>();

  const onSubmit: SubmitHandler<LoginState> = (data) => {
    if (isSubmitting) return;
    alert("success");
    reset();
  };

  return (
    <div className="mx-auto p-8 bg-gray-200 font-mono w-full h-screen md:w-1/2 md:h-auto md:my-8 md:shadow-2xl">
      <h1 className="text-3xl uppercase mb-4 text-center">login</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="flex-col uppercase mb-8">
        <div className="mb-4">
          <p className="text-red-600">{errors.email?.message}</p>
          <label>メールアドレス</label>
          <input
            type="email"
            className="w-full"
            autoComplete="current-email"
            {...register("email", {
              required: "メールアドレスを入力してください",
              pattern: {
                value: /^[a-zA-Z0-9_+-]+(.[a-zA-Z0-9_+]+)*@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/,
                message: "正しいメールアドレスを入力してください",
              },
            })}
          />
        </div>
        <div className="mb-8">
          <p className="text-red-600">{errors.password?.message}</p>
          <label>パスワード</label>
          <input
            type="password"
            className="w-full"
            autoComplete="current-password"
            {...register("password", {
              required: "パスワードが入力されていません",
              minLength: { value: 8, message: "正しいパスワードを入力してください" },
            })}
          />
        </div>
        <button className="bg-blue-800 text-white text-center w-full py-1 uppercase">Login</button>
      </form>
      <Link to="/signup" className="bg-stone-700 text-center text-white w-full py-1 inline-block">
        アカウント作成はこちら
      </Link>
    </div>
  );
};

export default Login;
