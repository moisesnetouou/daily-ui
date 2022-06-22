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

      <div className="flex w-1/2">1</div>
    </main>
  );
}
