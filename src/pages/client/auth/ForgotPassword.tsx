import { zodResolver } from "@hookform/resolvers/zod";
import { Mail } from "lucide-react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { forgotPasswordApi } from "../../../api/auth";
import trenoLogo from "../../../assets/treno.png";
import { ForgotPasswordSchema } from "../../../schemas/AuthSchema";
import type { UserType } from "../../../types/User";
import handleFormError from "../../../utils/handleFormError";
import { useCountdown } from "../../../hooks/useCountdown";

const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: zodResolver(ForgotPasswordSchema) });
  const { timeLeft, start, format } = useCountdown();
  const onSubmit = async (data: UserType) => {
    try {
      await forgotPasswordApi({ email: data.email });
      toast.success("Đã gửi mail thành công");
      start(15 * 60); // 15 phút
      reset();
    } catch (error: any) {
      toast.error(error.response?.data?.message);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8 bg-gradient-to-bl from-white via-blue-100 to-blue-800 bg-[length:200%_200%] animate-gradient">
      <div className="w-full max-w-md">
        <div className="flex justify-center items-center mb-8">
          <img src={trenoLogo} alt="Treno" className="h-16 w-16 mr-2" />
          <p className="text-5xl font-bold">Treno</p>
        </div>
        {/*  Container */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
          {/* Header */}
          <div className="text-center mb-4">
            <p className="text-xl font-medium text-gray-800">Quên mật khẩu</p>
            <div className="grid grid-cols-1 gap-3">
              <span className="text-sm text-center mt-2 text-gray-400">
                {" "}
                Nhập email của bạn để nhận hướng dẫn reset mật khẩu
              </span>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="email"
                  type="email"
                  {...register("email")}
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 outline-none"
                  placeholder="name@example.com"
                />
              </div>
              {handleFormError(errors, "email")}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={timeLeft > 0}
              className={`w-full py-3 rounded-lg font-medium cursor-pointer ${
                timeLeft
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-blue-600 text-white"
              }`}
            >
              {timeLeft ? `Gửi lại sau ${format()}` : "Gửi email khôi phục"}
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm"></div>
          </div>
          {/* Sign in Link */}
          <p className="mt-8 text-center text-sm text-gray-600">
            Đã nhớ ra mật khẩu? Quay về{" "}
            <a
              href="/signin"
              className="font-medium text-blue-600 hover:text-blue-500 transition"
            >
              Đăng nhập
            </a>{" "}
          </p>
        </div>

        {/* Footer Text */}
        <p className="mt-6 text-center text-xs text-gray-500 px-4">
          Bằng cách đăng nhập, bạn đồng ý với Điều khoản dịch vụ và Chính sách
          bảo mật
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
