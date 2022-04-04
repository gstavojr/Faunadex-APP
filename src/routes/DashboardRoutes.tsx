import { Routes, Route } from 'react-router-dom';

import { Navbar } from '../components/nav/Navbar';
import { ChatBotPage } from '../pages/ChatBotPage';
import {
  AlbumPage,
  DashboardPage,
  PhotoPage,
  ProfilePage,
  UploadPage,
  PhotoDetailPage,
  DetectTextPage,
} from '../pages';

export const DashboardRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="p-2">
        <Routes>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/upload" element={<UploadPage />} />
          <Route path="/album" element={<AlbumPage />} />
          <Route path="/photo/detail" element={<PhotoDetailPage />} />
          <Route path="/photo" element={<PhotoPage />} />
          <Route path="/detect/text" element={<DetectTextPage />} />
          <Route path="/chat/bot" element={<ChatBotPage />} />
          {/* <Route path="/auth/register" element={<RegisterPage />} /> */}

          <Route path="/" element={<DashboardPage />} />
        </Routes>
      </div>
    </>
  );
};
