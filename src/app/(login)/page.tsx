import { Logo } from "@/components/Logo";
import React from "react";
import { Footer } from "./components/Footer";
import { LoginForm } from "./components/LoginForm";

function Login() {
  return (
    <div className='flex flex-col justify-between h-full md:max-w-[500px] gap-2'>
      <Logo />
      {/* Login Form */}
      <LoginForm />
      <Footer />
    </div>
  );
}

export default Login;
