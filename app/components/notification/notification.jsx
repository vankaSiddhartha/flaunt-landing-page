"use client"
import { useState, useEffect } from 'react';
import { X, MapPin } from 'lucide-react';

// Curated list of Indian girls' names
const indianGirlNames = [
  "Aaradhya", "Ananya", "Aditi", "Anika", "Anvi",
  "Bhavya", "Divya", "Diya", "Drishti", "Esha",
  "Ishika", "Ishita", "Kavya", "Keerthi", "Lasya",
  "Mahika", "Nandini", "Navya", "Nithya", "Pranavi",
  "Prisha", "Riya", "Saanvi", "Sahithi", "Sanjana",
  "Shreya", "Tanvi", "Veda", "Vibha", "Yukta"
];

// Export Notification Component
export const Notification = ({ name, onClose }) => {
  return (
    <div className="fixed top-4 right-4 w-80 bg-white rounded-lg shadow-lg border border-gray-100 animate-slide-in">
      <div className="flex items-center gap-3 p-3">
        {/* Avatar */}
        <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
          <span className="text-purple-600 font-medium text-base">
            {name?.[0] || '?'}
          </span>
        </div>
        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex justify-between items-start">
            <div>
              <div className="flex items-center gap-2">
                <span className="font-medium text-gray-900 text-sm">{name}</span>
                <span className="text-gray-500 text-xs">just registered</span>
              </div>
              <div className="flex items-center gap-1 mt-0.5 text-xs text-gray-500">
                <MapPin size={10} />
                <span>Vizag, India</span>
                <span className="mx-1">•</span>
                <span>just now</span>
              </div>
            </div>
            <button 
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors ml-2"
            >
              <X size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Utility function to get random name
const getRandomName = () => {
  const randomIndex = Math.floor(Math.random() * indianGirlNames.length);
  return indianGirlNames[randomIndex];
};

// Main notification system
export default function NotificationSystem() {
  const [notifications, setNotifications] = useState([]);

  const addNotification = () => {
    const newNotification = {
      id: Date.now(),
      name: getRandomName()
    };
    setNotifications(prev => [...prev, newNotification]);
    
    // Remove notification after 30 seconds
    setTimeout(() => {
      removeNotification(newNotification.id);
    }, 30000);
  };

  const removeNotification = (id) => {
    setNotifications(prev => prev.filter(notification => notification.id !== id));
  };

  useEffect(() => {
    // Add new notification every 5-10 seconds
    const interval = setInterval(() => {
      addNotification();
    }, Math.floor(Math.random() * (10000 - 5000 + 1) + 5000));

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-4">
      <div className="space-y-4">
        {notifications.map(notification => (
          <Notification
            key={notification.id}
            name={notification.name}
            onClose={() => removeNotification(notification.id)}
          />
        ))}
      </div>
    </div>
  );
}