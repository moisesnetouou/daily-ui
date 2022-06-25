import medusaImg from '../../../assets/images/medusa.jpg';

export function SignUp() {
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
        <div className="flex flex-col justify-between h-4/5 m-auto rounded-2xl">
          <div className="text-gray-900">
            <h1>Welcome to Delta Deep Sea</h1>

            <h2>Create your account</h2>
          </div>

          <form>
            <input
              placeholder="Enter your email"
              className="border border-gray-800 w-full"
            />
            <input placeholder="Your password" className="w-full" />
            <div>
              <input type="checkbox" /> <span>Show Password?</span>
            </div>

            <button type="submit">Sign Up</button>
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
