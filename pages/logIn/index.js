import Image from 'next/image';
import { useState } from 'react';
import styles from './login.module.css'

import logo from '../../public/images/logo_color.png'
import { useSession, signIn, signOut, getSession, getCsrfToken } from "next-auth/react";
import Link from 'next/link';

export default function LogIn({ session }) {

  const [user, setUser] = useState({
    username: '',
    password: '',
  });
  const isClidSet = (session?.user?.authclid !== undefined);

  // console.log('Session', session);
  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <Image src={logo} alt="PCB Logo" width={125} height={39} className={styles.logo}/>
        <hr />
        <div className="row g-2">
          <div className="form-group">
            <label>Email</label>
            <input type="text" className="form-control" value={user.username} placeholder="Email Address"
              onChange={(e) => setUser({ ...user, username: e.target.value })} />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" value={user.password} placeholder="Password"
              onChange={(e) => setUser({ ...user, password: e.target.value })} />
          </div>
          <div className="form-group text-center">
            <button type="submit" className="btn btn-primary"
              onClick={() => { signIn('user-pass', user); }}>Login</button>
          </div>
          <br />or<br />
          <button className='btn btn-small btn-primary' onClick={() => signIn("google")}>Sign in using Google</button>
      </div>
    </div>
    </div>
  )
  }

export async function getServerSideProps(context) {
  // const session = await getSession(context);
  // console.log("session BED", session);
  const session = ""
  return {
    props: {
      session
    }
  }
}
