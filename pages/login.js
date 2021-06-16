import Head from 'next/head';
import Cookies from 'universal-cookie';
import { useState } from 'react';
import { default as _App } from 'next/app';

export default function Login({ notLoggedIn }) {
  const [password, setPassword] = useState('');

  if (!notLoggedIn) {
    return (
      <button
        onClick={e => {
          e.preventDefault();
          const cookies = new Cookies();
          cookies.remove('pw', { path: '/' });
          window.location.href = '/login';
        }}
      >
        Logout
      </button>
    );
  }

  return (
    <form>
      <label>
        <input
          onChange={e => setPassword(e.target.value)}
          placeholder="Add password"
          type="password"
          value={password}
        />
      </label>
      <button
        type="submit"
        onClick={e => {
          e.preventDefault();
          const cookies = new Cookies();
          cookies.set('pw', password, {
            path: '/',
          });
          window.location.href = '/';
        }}
      >
        Login
      </button>
    </form>
  );
}

export async function getStaticProps() {
  return {
    props: {},
  };
}
