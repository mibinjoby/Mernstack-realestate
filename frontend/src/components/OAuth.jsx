import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { app } from '../Firebase';
import { useDispatch } from 'react-redux';
import { signInSuccess } from '../Redux/user/userslice';
import { useNavigate } from 'react-router-dom';



function OAuth() {
  const dispatch = useDispatch(); 
   const navigate = useNavigate()

  const handleGoogleClick = async () => {
    
    try { 
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);
      const result = await signInWithPopup(auth, provider);
     

      const res = await fetch ('/api/auth/google', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL,

        }),
      });

   const data = await res.json();
      dispatch(signInSuccess(data));
      navigate('/');

    } catch (error) {

      console.log('could not signin with Google', error);
      
    }
  };

  return (
    <button
      onClick={handleGoogleClick}
      type="button"
      className="bg-red-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
    >
      Continue with Google
    </button>
  );
}

export default OAuth;


