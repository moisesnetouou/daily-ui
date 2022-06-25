/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';
import medusaImg from '../../../assets/images/medusa.jpg';

export function SignUp() {
  const [isShowPassword, setIsShowPassword] = useState(false);

  function handleChangeVisibilityPassword() {
    setIsShowPassword(!isShowPassword);
  }

  return (
    <main className="flex h-screen">
      <div
        style={{ backgroundImage: `url(${medusaImg})` }}
        className="flex w-1/2 bg-cover bg-center"
      >
        <div className="flex flex-col justify-between h-4/5 m-auto rounded-2xl bg-gradient-to-r from-indigo-500 bg-opacity-20 p-8">
          <div className="text-white">
            <h1>Delta Deep Sea</h1>

            <h2>We invite you to know everything about the Abyssal Beings.</h2>

            <span>
              Join the community to learn more about the mysteries of the abyss.
            </span>
          </div>

          <div className="flex flex-col">
            <span>Already have an account?</span>
            <a href="/#">Sign In</a>
          </div>
        </div>
      </div>

      <div className="flex w-1/2">
        <div className="flex flex-col justify-between h-4/5 w-3/5 m-auto rounded-2xl">
          <div className="text-gray-900">
            <h1 className="text-2xl font-bold">Welcome to Delta Deep Sea</h1>

            <h2 className="text-lg">Create your account</h2>
          </div>

          <form className="flex flex-col">
            <label htmlFor="email">Email address</label>
            <input
              id="email"
              placeholder="Enter your email"
              className="border border-gray-400 mt-5"
            />
            <label htmlFor="password" className="mt-8">
              Set password
            </label>
            <input
              id="password"
              type={!isShowPassword ? 'password' : 'text'}
              placeholder="Your password"
              className="border border-gray-400 mt-5"
            />
            <div>
              <input
                type="checkbox"
                className="mt-4"
                onClick={handleChangeVisibilityPassword}
              />{' '}
              <span>Show Password?</span>
            </div>

            <button type="submit" className="bg-cyan-900 mt-10 p-2 rounded-lg">
              Sign Up
            </button>
          </form>

          <div className="flex flex-col">
            <span>Already have an account?</span>
            <a href="/#">Sign In</a>
          </div>
        </div>
      </div>
    </main>
  );
}
