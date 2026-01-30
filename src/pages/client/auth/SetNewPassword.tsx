import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import trenoLogo from "../../../assets/treno.png";
import { setNewPassword } from "../../../schemas/AuthSchema";
import handleFormError from "../../../utils/handleFormError";
import { useState } from "react";
import { setNewPasswordApi } from "../../../api/auth";
interface confirmPassword {
  newPassword: string;
  confirmPassword: string;
}
const SetNewPassword = () => {
  const { resetToken } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: zodResolver(setNewPassword) });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const nav = useNavigate();
  const onSubmit = async (data: confirmPassword) => {
    try {
      const { newPassword } = data;
      const res = await setNewPasswordApi({
        resetToken: resetToken,
        newPassword,
      });
      localStorage.setItem("accessToken", res.data.accessToken);
      toast.success("Đổi mật khẩu thành công");
      reset();
      nav("/signin");
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
            <p className="text-xl font-medium text-gray-800">
              Đặt mật khẩu mới
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* password */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Mật khẩu mới
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  {...register("newPassword")}
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 outline-none"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 cursor-pointer"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
              {handleFormError(errors, "password")}
            </div>

            {/*confirm Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Xác nhận mật khẩu mới
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="password"
                  type={showConfirm ? "text" : "password"}
                  {...register("confirmPassword")}
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 outline-none"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirm(!showConfirm)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 cursor-pointer"
                >
                  {showConfirm ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
              {handleFormError(errors, "confirmPassword")}
            </div>

            {/* Remember Me & Forgot Password */}

            {/* Submit */}
            <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition duration-200 transform hover:scale-[1.01] active:scale-[0.98] cursor-pointer">
              Xác nhận
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SetNewPassword;
