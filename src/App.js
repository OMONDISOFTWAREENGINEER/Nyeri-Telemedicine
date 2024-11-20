// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import VideoConsultation from './pages/VideoConsultation';
import Appointments from './pages/Appointments';
import MedicalRecords from './pages/MedicalRecords';
import Profile from './pages/UserProfile';
import Support from './pages/Support';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';
import Services from './pages/Services';
import Chatbot from './components/Chatbot'; // Import the Chatbot
import AdminDashboard from './pages/AdminDashboard';
import ForgotPassword from './pages/ForgotPassword';

const App = () => (
  <AuthProvider>
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/medical-records" element={<MedicalRecords />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/services" element={<Services />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/support" element={<Support />} />
          <Route path="/video-consultation" element={<VideoConsultation />} />
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="/admin-dashboard"  element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
          <Route path="//forgot-password" element={<ProtectedRoute><ForgotPassword /></ProtectedRoute>} />

          
        </Routes>
      </main>
      <Footer />
      <Chatbot /> {/* Add the Chatbot component */}
    </div>
  </AuthProvider>
);

export default App;
