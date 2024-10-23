"use client"
import { useState, useEffect } from 'react';
import { X, MapPin } from 'lucide-react';

// Updated names data including Telugu names
export const indianNames = [
  "Aanya", "Diya", "Saanvi", "Advika", "Ananya",
  "Avni", "Ishita", "Kavya", "Lakshmi", "Myra",
  "Navya", "Pari", "Riya", "Sahana", "Tanvi",
  "Veda", "Zara", "Aadhya", "Aaradhya", "Prisha",
  // Telugu names
  "Annapurna", "Bhavani", "Chandrika", "Divya", "Eeshwari",
  "Gayatri", "Hema", "Indumathi", "Jyothi", "Kamala",
  "Lalitha", "Madhavi", "Nandini", "Padma", "Radha",
  "Saraswati", "Tulasi", "Uma", "Vani", "Yamuna"
];

// Export notification styles (unchanged)
export const notificationStyles = `
@keyframes slide-in {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.animate-slide-in {
  animation: slide-in 0.3s ease-out;
}
`;

// Export Notification Component (unchanged)
export const Notification = ({ name, onClose }) => {
  return (
    <div className="fixed top-4 right-4 w-80 bg-white rounded-lg shadow-lg border border-gray-100 animate-slide-in">
      <div className="flex items-center gap-3 p-3">
        {/* Avatar */}
        <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
          <span className="text-purple-600 font-medium text-base">
            {name[0]}
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

// Export utility functions
export const getRandomName = () => {
  const randomIndex = Math.floor(Math.random() * indianNames.length);
  return indianNames[randomIndex];
};

// Export main notification system
export default function NotificationSystem() {
  const [notifications, setNotifications] = useState([]);

  const addNotification = () => {
    const newNotification = {
      id: Date.now(),
      name: getRandomName()
    };
    setNotifications(prev => [...prev, newNotification]);
    
    setTimeout(() => {
      removeNotification(newNotification.id);
    }, 30000); // Changed to 30 seconds
  };

  const removeNotification = (id) => {
    setNotifications(prev => prev.filter(notification => notification.id !== id));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      addNotification();
    },   Math.floor(Math.random() * (10000 - 5000 + 1) + 5000)) // Random interval between 1 and 2 minutes

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