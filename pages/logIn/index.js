import Image from 'next/image';
import { useState } from 'react';
import styles from './login.module.css'
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
    <>
      <main className="main">
        <Image src="/images/logo_white_1.png" alt="PCB Logo" width={250} height={78} />
        <hr />
        {
          session && session.user ?
            <>
              {session.user?.picture && <Image className="rounded-circle" src={session.user?.picture} alt="PCB Logo" width={32} height={32} />}
              <span style={{ textAlign: 'center' }}>Signed in as <strong>{session.user.name}</strong><br />({session.user.email})</span><hr />
              <button className='btn btn-small btn-danger' onClick={() => signOut()}>Sign out</button><br />
              <button disabled={isClidSet} className='btn btn-small btn-primary' onClick={async () => {
                const result = await signIn('clid', { askclid: '4224' });
              }}>{isClidSet ? 'Already using PCB - 4224' : 'Set Me Client PCB - 4224'}</button>
              <hr />
              <Link href="/eforms/usa/new/full">Full Form</Link>
              <Link href="/eforms/usa/new/wizard">Wizard Form</Link>
            </>
            :
            <>
              Not signed in <br />
              <button className='btn btn-small btn-primary' onClick={() => signIn("google")}>Sign in using Google</button>
              <br />or<br />
              <div className="row g-2">
                <div className="form-group">
                  <label>Username</label>
                  <input type="text" className="form-control" value={user.username} placeholder="Enter username"
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
              </div>
            </>
        }

      </main>
    </>
  )
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  // console.log("session BED", session);
  return {
    props: {
      session
    }
  }
}
