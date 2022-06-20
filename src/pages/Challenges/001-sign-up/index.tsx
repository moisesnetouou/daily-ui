import {
  SignUpContainer,
  ApresentationContainer,
  ApresentationContent,
  FormContainer,
} from './styles';

export function SignUp() {
  return (
    <SignUpContainer>
      <ApresentationContainer>
        <ApresentationContent>
          <div className="apresentation-header">
            <h1>Delta Deep Sea</h1>

            <h2>We invite you to know everything about the Abyssal Beings.</h2>

            <span>
              Join the community to learn more about the mysteries of the abyss.
            </span>
          </div>

          <div className="apresentation-signin">
            <span>Already have an account?</span>
            <a href="/#">Sign In</a>
          </div>
        </ApresentationContent>
      </ApresentationContainer>

      <FormContainer>1</FormContainer>
    </SignUpContainer>
  );
}
