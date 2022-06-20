import { Routes, Route } from 'react-router-dom';
import { SignUp } from '../pages/Challenges/001-sign-up';
import { Home } from '../pages/Home';

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/challenge/001" element={<SignUp />} />
    </Routes>
  );
}
