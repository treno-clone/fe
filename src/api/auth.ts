import api from ".";
import type { UserType } from "../types/User";

export const signupApi = async (body: UserType) => {
  console.log(body);
  const res = await api.post("/auth/signup", body);
  return res.data;
};

export const signinApi = async (body: UserType) => {
  const res = await api.post("/auth/signin", body);
  return res.data;
};
export const forgotPasswordApi = async (body: UserType) => {
  const res = await api.post("/auth/send-reset-link", body);
  return res;
};
