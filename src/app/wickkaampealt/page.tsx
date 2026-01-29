'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Camera, MapPin, Clock, User, LogIn, LogOut, X, CheckCircle, AlertCircle } from 'lucide-react';
import Navigation from '@/components/layout/Navigation';

interface AttendanceData {
  employeeName: string;
  location: string;
  checkInTime?: string;
  checkInCoordinates?: string;
  checkInPhoto?: string;
  checkOutTime?: string;
  checkOutCoordinates?: string;
  checkOutPhoto?: string;
}

export default function WickKaampealtPage() {
  const [employeeName, setEmployeeName] = useState('');
  const [location, setLocation] = useState('');
  const [selectedAction, setSelectedAction] = useState<'checkin' | 'checkout' | null>(null);
  const [showCamera, setShowCamera] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const streamRef = useRef<MediaStream | null>(null);

  // Cleanup camera stream on unmount
  useEffect(() => {
    return () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  // Get Indian Standard Time
  const getISTTime = () => {
    return new Date().toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    });
  };

  const showNotification = (type: 'success' | 'error', message: string) => {
    setNotification({ type, message });
    setTimeout(() => setNotification(null), 5000);
  };

  const requestLocationPermission = async (): Promise<boolean> => {
    try {
      // Check if permissions API is available
      if ('permissions' in navigator) {
        try {
          const result = await navigator.permissions.query({ name: 'geolocation' });
          
          if (result.state === 'denied') {
            showNotification('error', 'Location permission is blocked. Please enable it in your browser settings.');
            return false;
          }
          
          if (result.state === 'granted') {
            return true;
          }
        } catch (permError) {
          // Permissions API might not work on all browsers, continue anyway
          console.log('Permissions API not fully supported, will request directly');
        }
      }
      
      // Try to get location (this will trigger permission popup if not yet decided)
      try {
        await getCurrentPosition();
        return true;
      } catch (geoError: unknown) {
        const err = geoError as { code?: number; message?: string };
        
        let errorMessage = 'Could not get location. Please check your settings.';
        
        if (err.code === 1) {
          errorMessage = 'Location permission denied. Please enable location access in your browser settings.';
        } else if (err.code === 2) {
          errorMessage = 'Location unavailable. Please check your device settings.';
        } else if (err.code === 3) {
          errorMessage = 'Location request timed out. Please try again.';
        }
        
        showNotification('error', errorMessage);
        return false;
      }
    } catch (error) {
      console.error('Permission check error:', error);
      showNotification('error', 'Error checking location permission');
      return false;
    }
  };

  const getCurrentPosition = (): Promise<GeolocationPosition> => {
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        reject({ code: 0, message: 'Geolocation not supported' });
        return;
      }
      navigator.geolocation.getCurrentPosition(
        resolve, 
        (error) => {
          reject({
            code: error.code,
            message: error.message || 'Location error'
          });
        },
        {
          enableHighAccuracy: true,
          timeout: 15000,
          maximumAge: 0
        }
      );
    });
  };

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { facingMode: 'user', width: 640, height: 480 } 
      });
      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (error) {
      console.error('Camera error:', error);
      showNotification('error', 'Could not access camera. Please check permissions.');
    }
  };

  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
    }
    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }
  };

  const capturePhoto = (): string | null => {
    if (!videoRef.current || !canvasRef.current) return null;
    
    const canvas = canvasRef.current;
    const video = videoRef.current;
    
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return null;
    
    ctx.drawImage(video, 0, 0);
    
    // Compress image to ~30KB
    return canvas.toDataURL('image/jpeg', 0.3);
  };

  const handleActionSelect = async (action: 'checkin' | 'checkout') => {
    if (!employeeName.trim() || !location.trim()) {
      showNotification('error', 'Please enter employee name and location');
      return;
    }

    setSelectedAction(action);
    setShowCamera(true);
    await startCamera();
  };

  const confirmCapture = async () => {
    setIsSubmitting(true);
    
    try {
      const istTime = getISTTime();
      const timestamp = new Date().toISOString();
      
      // Capture photo first
      const photo = capturePhoto();
      if (!photo) {
        showNotification('error', 'Failed to capture photo. Please try again.');
        setIsSubmitting(false);
        return;
      }

      // Try to get location in background (non-blocking)
      let coordinates = 'Location unavailable';
      let locationWarning = false;
      
      try {
        const position = await getCurrentPosition();
        coordinates = `${position.coords.latitude}, ${position.coords.longitude}`;
      } catch (geoError: unknown) {
        const err = geoError as { code?: number; message?: string };
        locationWarning = true;
        
        // Set a descriptive error message
        if (err.code === 1) {
          coordinates = 'Location denied by user';
        } else if (err.code === 2) {
          coordinates = 'Location unavailable';
        } else if (err.code === 3) {
          coordinates = 'Location timeout';
        } else {
          coordinates = 'Location error';
        }
      }

      const attendanceData: AttendanceData = {
        employeeName,
        location,
      };

      if (selectedAction === 'checkin') {
        attendanceData.checkInTime = timestamp;
        attendanceData.checkInCoordinates = coordinates;
        attendanceData.checkInPhoto = photo;
      } else {
        attendanceData.checkOutTime = timestamp;
        attendanceData.checkOutCoordinates = coordinates;
        attendanceData.checkOutPhoto = photo;
      }

      // Submit to API
      try {
        const response = await fetch('/api/attendance', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(attendanceData)
        });

        const result = await response.json();

        if (response.ok) {
          const actionText = selectedAction === 'checkin' ? 'Check-in' : 'Check-out';
          if (locationWarning) {
            showNotification('success', `${actionText} recorded successfully! (Location could not be captured)`);
          } else {
            showNotification('success', `${actionText} recorded successfully with location!`);
          }
          
          // Reset form
          setEmployeeName('');
          setLocation('');
          setSelectedAction(null);
          stopCamera();
          setShowCamera(false);
        } else {
          showNotification('error', result.error || 'Failed to record attendance');
        }
      } catch (apiError) {
        console.error('API error:', apiError);
        showNotification('error', 'Network error. Please check your connection.');
      }
    } catch (error: unknown) {
      console.error('Unexpected error:', error);
      showNotification('error', 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const cancelCapture = () => {
    stopCamera();
    setShowCamera(false);
    setSelectedAction(null);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Navigation />
      
      <div className="pt-20 pb-12 px-4 max-w-md mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Wick Kaampealt
          </h1>
          <p className="text-gray-600">Employee Attendance System</p>
        </motion.div>

        {/* Notification */}
        {notification && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className={`mb-6 p-4 rounded-lg flex items-start ${
              notification.type === 'success' 
                ? 'bg-green-50 border border-green-200' 
                : 'bg-red-50 border border-red-200'
            }`}
          >
            {notification.type === 'success' ? (
              <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
            ) : (
              <AlertCircle className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
            )}
            <p className={notification.type === 'success' ? 'text-green-800' : 'text-red-800'}>
              {notification.message}
            </p>
          </motion.div>
        )}

        {/* Main Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-2xl shadow-lg p-6 mb-6"
        >
          <div className="space-y-4">
            {/* Employee Name */}
            <div>
              <label className="block text-sm font-medium text-red-700 mb-2">
                <User className="w-4 h-4 inline mr-1" />
                Employee Name *
              </label>
              <input
                type="text"
                value={employeeName}
                onChange={(e) => setEmployeeName(e.target.value)}
                disabled={isCheckedIn}
                placeholder="Enter your name"
                className="w-full px-4 py-3 border border-red-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed text-red-900 placeholder-red-400"
              />
            </div>

            {/* Location */}
            <div>
              <label className="block text-sm font-medium text-red-700 mb-2">
                <MapPin className="w-4 h-4 inline mr-1" />
                Location *
              </label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                disabled={isCheckedIn}
                placeholder="Enter your location"
                className="w-full px-4 py-3 border border-red-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed text-red-900 placeholder-red-400"
              />
            </div>

            {/* Action Selection */}
            <div className="pt-4">
              <p className="text-center text-gray-600 mb-4 font-medium">
                Aapne kya miss kara?
              </p>
              <div className="grid grid-cols-2 gap-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleActionSelect('checkin')}
                  disabled={isSubmitting}
                  className="bg-green-600 text-white py-4 rounded-lg font-semibold flex flex-col items-center justify-center hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <LogIn className="w-6 h-6 mb-1" />
                  <span>Check In</span>
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleActionSelect('checkout')}
                  disabled={isSubmitting}
                  className="bg-red-600 text-white py-4 rounded-lg font-semibold flex flex-col items-center justify-center hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <LogOut className="w-6 h-6 mb-1" />
                  <span>Check Out</span>
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Info Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-blue-50 border border-blue-200 rounded-lg p-4"
        >
          <h3 className="font-semibold text-blue-900 mb-2">Kaise kaam karta hai:</h3>
          <ul className="text-sm text-blue-800 space-y-1">
            <li>• Apna naam aur location enter karein</li>
            <li>• Check In ya Check Out choose karein</li>
            <li>• Photo lein jab prompt ho</li>
            <li>• Location automatically capture hoti hai</li>
            <li>• Time Indian Standard Time (IST) mein record hota hai</li>
          </ul>
        </motion.div>
      </div>

      {/* Camera Modal */}
      {showCamera && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full overflow-hidden">
            <div className="p-4 bg-gray-900 text-white flex items-center justify-between">
              <div className="flex items-center">
                <Camera className="w-5 h-5 mr-2" />
                <span className="font-semibold">
                  {selectedAction === 'checkin' ? 'Check-In' : 'Check-Out'} Photo
                </span>
              </div>
              <button onClick={cancelCapture} className="text-white hover:text-gray-300">
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="relative bg-black">
              <video
                ref={videoRef}
                autoPlay
                playsInline
                className="w-full"
              />
              <canvas ref={canvasRef} className="hidden" />
            </div>

            <div className="p-4 space-y-3">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={confirmCapture}
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                    Processing...
                  </>
                ) : (
                  <>
                    <Camera className="w-5 h-5 mr-2" />
                    Capture & Continue
                  </>
                )}
              </motion.button>
              
              <button
                onClick={cancelCapture}
                className="w-full bg-gray-200 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
