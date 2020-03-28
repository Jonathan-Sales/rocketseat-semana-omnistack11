import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';
import logoImg from '../../assets/logo.svg';

export default function Profile() {
  const [ong, setOng] = useState({});
  const [incidents, setIncidents] = useState([]);

  const history = useHistory();

  useEffect(() => {
    async function loadData() {
      const storage = localStorage.getItem('ong');
      if (!storage) {
        history.push('/');
      }
      setOng(JSON.parse(storage));

      const response = await api.get('incident', {
        headers: { Authorization: ong.id }
      });

      const data = response.data.map(incident => ({
        ...incident,
        valueFormatted: Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }).format(incident.value)
      }));

      setIncidents(data);
    }
    loadData();
  }, [history, ong.id]);

  async function handleDeleteIncident(id) {
    try {
      await api.delete(`incident/${id}`, {
        headers: { Authorization: ong.id }
      });

      const data = incidents.filter(incident => incident.id !== id);
      setIncidents(data);
    } catch (error) {
      alert('Não foi possível deletar o caso, tente novamente');
    }
  }

  function handleLogout() {
    localStorage.clear();
    history.push('/');
  }

  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="Be The Hero" />
        <span>Bem vinda, {ong.name}</span>

        <Link className="button-default" to="/incidents/new">
          Cadastrar novo caso
        </Link>
        <button onClick={handleLogout}>
          <FiPower size={20} color="#e02041" />
        </button>
      </header>

      <h1>Casos cadastrados</h1>
      <ul>
        {incidents.map(incident => (
          <li key={incident.id}>
            <strong>Caso</strong>
            <p>{incident.title}</p>
            <strong>Descrição</strong>
            <p>{incident.description}</p>
            <strong>Valor</strong>
            <p>{incident.valueFormatted}</p>
            <button onClick={() => handleDeleteIncident(incident.id)}>
              <FiTrash2 size={20} color="#a8a8b3" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
