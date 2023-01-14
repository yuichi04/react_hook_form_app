import { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

type Register = {
  name: string;
  email: string;
  password: string;
  confirm: string;
};

const SignUp: FC = () => {
  const navigate = useNavigate();
  const {
    reset,
    register,
    handleSubmit,
    trigger,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm<Register>();

  const onSubmit: SubmitHandler<Register> = (data) => {
    navigate("/");
    reset();
  };

  return (
    <div className="mx-auto p-8 bg-gray-200 font-mono w-full h-screen md:w-1/2 md:h-auto md:my-8 md:shadow-2xl">
      <h1 className="text-3xl uppercase mb-4 text-center">sign up</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="flex-col uppercase mb-8">
        <div className="mb-4">
          <p className="text-red-600">{errors.name?.message}</p>
          <label>ユーザー名</label>
          <input
            {...register("name", {
              required: "ユーザー名を入力してください",
              minLength: { value: 2, message: "ユーザー名は2文字以上で入力してください" },
            })}
            type="text"
            placeholder="2文字以上"
            autoComplete="new-username"
            className={`w-full rounded-sm px-2 py-1 ${errors.name?.message && "outline outline-1 outline-red-600"}`}
          />
        </div>
        <div className="mb-4">
          <p className="text-red-600">{errors.email?.message}</p>
          <label>メールアドレス</label>
          <input
            {...register("email", {
              required: "メールアドレスを入力してください",
              pattern: {
                value: /^[a-zA-Z0-9_+-]+(.[a-zA-Z0-9_+-]+)*@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/,
                message: "メールアドレスの形式が正しくありません",
              },
            })}
            type="email"
            placeholder="exsample@xxx.com"
            autoComplete="new-email"
            className={`w-full rounded-sm px-2 py-1 ${errors.email?.message && "outline outline-1 outline-red-600"}`}
          />
        </div>
        <div className="mb-4">
          <p className="text-red-600">{errors.password?.message}</p>
          <label>パスワード</label>
          <input
            {...register("password", {
              required: "パスワードは8文字以上で入力してください",
              minLength: { value: 8, message: "パスワードは8文字以上で入力してください" },
              onBlur: () => {
                if (getValues("confirm")) trigger("confirm");
              },
            })}
            type="password"
            placeholder="8文字以上"
            autoComplete="new-password"
            className={`w-full rounded-sm px-2 py-1 ${errors.password?.message && "outline outline-1 outline-red-600"}`}
          />
        </div>
        <div className="mb-8">
          <p className="text-red-600">{errors.confirm?.message}</p>
          <label>パスワード（確認用）</label>
          <input
            {...register("confirm", {
              required: "確認のためパスワードを再度入力してください",
              validate: (value) => {
                return value === getValues("password") || "パスワードが一致しません";
              },
            })}
            type="password"
            placeholder="パスワードを再度入力してください"
            autoComplete="new-confirm-password"
            className={`w-full rounded-sm px-2 py-1 ${errors.confirm?.message && "outline outline-1 outline-red-600"}`}
          />
        </div>
        <button disabled={isSubmitting} className="bg-blue-800 text-white text-center w-full py-1 uppercaseuppercase">
          アカウント作成
        </button>
      </form>
      <Link to="/login" className="bg-stone-700 text-center text-white w-full py-1 inline-block uppercase">
        ログインはこちらから
      </Link>
    </div>
  );
};

export default SignUp;
