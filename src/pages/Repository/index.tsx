import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Header, RepositoryInfo, Issues } from './styles';


interface RepositoryParams {
  repository: string;
}


const Repository: React.FC = () => {

  const { params } = useRouteMatch<RepositoryParams>();

  return (
    <>
      <Header>
        <img src={logoImg} alt="Github explorer"/>
        <Link to="/">
          < FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img src="https://avatars2.githubusercontent.com/u/2254731?v=4" alt="Rocketseat"/>
          <div>
            <strong>rocketseat/unform</strong>
            <p>descrição do repositorio</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>1808</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>48</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>67</strong>
            <span>Issues abertos</span>
          </li>

        </ul>

      </RepositoryInfo>

      <Issues>
        <Link
          to="hashash"
        >
          <div>
            <strong>agsdasd</strong>
            <p>asdasd</p>
          </div>
          <FiChevronRight size={20} />
        </Link>
      </Issues>

    </>
  );
};

export default Repository;
