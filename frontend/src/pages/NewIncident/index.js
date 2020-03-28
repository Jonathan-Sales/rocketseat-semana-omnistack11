import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';
import logoImg from '../../assets/logo.svg';

export default function NewIncident() {
  const [ong, setOng] = useState({});
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');

  const history = useHistory();

  useEffect(() => {
    const storage = localStorage.getItem('ong');
    if (!storage) {
      history.push('/');
    }
    setOng(JSON.parse(storage));
  }, [history]);

  async function handleSubmit(event) {
    event.preventDefault();

    const data = {
      title,
      description,
      value
    };

    try {
      await api.post('incident', data, {
        headers: { Authorization: ong.id }
      });
      history.push('/profile');
    } catch (error) {
      alert('Não foi possível cadastrar o caso, tente nvamente!');
    }
  }

  return (
    <div className="register-container-default">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Hero" />
          <h1>Cadastrar novo caso</h1>
          <p>
            Descreva o detalhamento para encontrar um herói para resolver isso.
          </p>
          <Link className="link-default" to="/profile">
            <FiArrowLeft size={16} color="#e02041" />
            Voltar para home
          </Link>
        </section>

        <form onSubmit={handleSubmit}>
          <input
            placeholder="Título do caso"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Descrição"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          <input
            placeholder="Valor em reais"
            value={value}
            onChange={e => setValue(e.target.value)}
          />
          <button className="button-default" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
