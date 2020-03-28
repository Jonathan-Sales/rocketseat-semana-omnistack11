import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';
import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

export default function Logon() {
  const [id, setId] = useState('');

  const history = useHistory();

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await api.post('sessions', { id });
      localStorage.setItem(
        'ong',
        JSON.stringify({
          id: response.data.id,
          name: response.data.name
        })
      );
      history.push('/profile');
    } catch (error) {
      alert('Não foi possível fazer o login');
    }
  }

  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="Be The Heroe" />
        <form onSubmit={handleSubmit}>
          <h1>Faça seu logon</h1>
          <input
            placeholder="Sua ID"
            value={id}
            onChange={e => setId(e.target.value)}
          />
          <button className="button-default" type="submit">
            Entrar
          </button>
        </form>
        <Link className="link-default" to="/register">
          <FiLogIn size={16} color="#e02041" />
          Não tenho cadastro
        </Link>
      </section>
      <img src={heroesImg} alt="Heroes" />
    </div>
  );
}
