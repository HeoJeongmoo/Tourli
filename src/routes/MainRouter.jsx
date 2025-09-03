import React from 'react';
import { Routes, Route } from 'react-router-dom';

// pages
import Home from '../pages/home/Home.jsx';
import Support from '../pages/support/Support.jsx';
import Community from '../pages/community/Community.jsx';
import Plan from '../pages/plan/Plan.jsx';
import Diary from '../pages/diary/Diary.jsx';
import Ideas from '../pages/ideas/Ideas.jsx';

// auth
import Login from '../pages/auth/login/Login.jsx';
import Signup from '../pages/auth/signup/Signup.jsx';

// import PostDetail from '../pages/PostDetail.jsx';
// import NotFound from '../pages/NotFound.jsx';

export default function MainRouter() {
  return (
    <Routes>
      {/* pages */}
      <Route path="/" element={<Home />} />
      <Route path="/support" element={<Support />} />
      <Route path="/community" element={<Community />} />
      <Route path="/plan" element={<Plan />} />
      <Route path="/diary" element={<Diary />} />
      <Route path="/ideas" element={<Ideas />} />

      {/* auth */}
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      {/* <Route path="/post/:id" element={<PostDetail />} /> */}
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
}
