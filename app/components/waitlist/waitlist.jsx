import React, { useState } from 'react';
import { ChevronRight, Loader2, Sparkles, ShoppingBag, Heart, Shirt } from 'lucide-react';
import database from '@/firebase/firebase';
import { getDatabase, ref, set } from "firebase/database"; 

const WaitlistForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: ''
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [hoverCount, setHoverCount] = useState(0);
  const[instagramId,setInstagramId] = useState();
  const[email,setEmail] = useState();
  const[phoneNumber,setPhoneNumber] = useState(); 

  const loadingMessages = [
    "Finding your perfect outfit match...",
    "Teaching your clothes to swipe right...",
    "Making your wardrobe less toxic...",
    "Asking your clothes if they spark joy...",
    "Getting fashion advice from error 404...",
    "Teaching hangers to use dating apps..."
  ];

  const getRandomLoadingMessage = () => {
    return loadingMessages[Math.floor(Math.random() * loadingMessages.length)];
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
   
   
      const userId = crypto.randomUUID(); // Generate a unique user ID
    try {
        // Create a reference to the user data in the database
        const userRef = ref(database, 'users/' + userId);
        
        // Define the user data to upload
        const userData = {
      
            email: email
         
        };

        // Set the user data at the specified reference
        await set(userRef, userData);
        console.log("User data uploaded successfully with ID: ", userId);
    } catch (error) {
        console.error("Error uploading user data: ", error);
   
  };
  
    setLoading(false);
    setSubmitted(true);
}

  if (submitted) {
    return (
      <div className="w-full max-w-md mx-auto p-6 text-center">
        <div className="bg-transparent rounded-lg p-6 ">
          <h2 className="text-2xl font-bold text-black mb-2 flex items-center justify-center gap-2">
            <Sparkles className="animate-spin" />
            Thanks a lot for your response
            <Heart className="text-red-500" />
          </h2>
          <p className="text-sm text-green-600 itali font-semiboldc">
            We'll reach out to you through email within the next few hours.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md mx-auto p-6">
      <div className="bg-white rounded-lg p-8 shadow-sm">
        <div className="flex items-center gap-2 mb-2">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Flaunt
          </h2>
          <ShoppingBag className="animate-bounce text-purple-600" />
        </div>
        <p className="text-black font-semibold mb-6 flex items-center gap-2">
          <span>Where clothes find their perfect match ✨</span>
          <Shirt className="text-blue-500" />
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
         

          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition duration-200"
              placeholder="fashionista@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>


          <button
            type="submit"
            disabled={loading}
            onMouseEnter={() => setHoverCount(c => c + 1)}
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 font-semibold text-white  py-2 px-4 rounded-lg hover:opacity-90 transition duration-200 flex items-center justify-center space-x-2"
          >
            {loading ? (
              <div className="flex items-center gap-2">
                <Loader2 className="animate-spin" size={20} />
                <span>{getRandomLoadingMessage()}</span>
              </div>
            ) : (
              <>
                <span>
                  {hoverCount === 1 && "Join Flaunt (Your clothes will thank you)"}
                  {hoverCount === 0 && "Come on, take a chance!"}
                  {hoverCount === 2 && "Your wardrobe needs this..."}
                  {hoverCount === 3&& "Still thinking? Your clothes aren't!"}
                  {hoverCount >= 4 && "Fine, keep hovering. We'll wait 😌"}
                </span>
                <ChevronRight size={20} />
              </>
            )}
          </button>

        </form>
      </div>
    </div>
  );
};

export default WaitlistForm;