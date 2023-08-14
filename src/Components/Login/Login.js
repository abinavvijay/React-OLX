// import React, { useState, useContext } from 'react';
// import { FirebaseContext } from '../../store/FirebaseContext';
// import Logo from '../../olx-logo.png';
// import './Login.css';

// function Login() {
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')
//   const {firebase} = useContext(FirebaseContext)
//   const handleLogin =(e) =>{
//     e.preventDefault()
//     firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
//       alert('Login Succesfull')
//     }).catch((error)=>{
//       alert(error.message)
//     })
//   }


//   return (
//     <div>
//       <div className="loginParentDiv">
//         <img width="200px" height="200px" src={Logo}></img>
//         <form>
//           <label htmlFor="fname">Email</label>
//           <br />
//           <input
//             className="input"
//             type="email"
//             id="fname"
//             name="email"
//             value={email}
//             onChange={(e)=>setEmail(e.target.value)}
//             defaultValue="John"
//           />
//           <br />
//           <label htmlFor="lname">Password</label>
//           <br />
//           <input
//             className="input"
//             type="password"
//             value={password}
//             onChange={(e)=>setPassword(e.target.value)}
//             id="lname"
//             name="password"
//             defaultValue="Doe"
//           />
//           <br />
//           <br />
//           <button>Login</button>
//         </form>
//         <a>Signup</a>
//       </div>
//     </div>
//   );
// }

// export default Login;


import React, { useState, useContext } from 'react';
import { FirebaseContext } from '../../store/FirebaseContext';
import Logo from '../../olx-logo.png';
import './Login.css';
import {useHistory} from 'react-router-dom'

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { firebase } = useContext(FirebaseContext);
  const history = useHistory()
  const handleLogin = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        history.push('/')
      })
      .catch((error) => {
        alert(error.message);
      });
  }

  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo} alt="Logo" />
        <form>
          <label htmlFor="email">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            name="password"
          />
          <br />
          <br />
          <button onClick={handleLogin}>Login</button>
        </form>
        <a>Signup</a>
      </div>
    </div>
  );
}

export default Login;
