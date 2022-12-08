import { useQuery } from 'react-query';
import axios from 'axios';

type Repository = {
  full_name: string;
  description: string;
};

export function Repos() {
  const { data: repos, isLoading } = useQuery<Repository[]>(
    'repos',
    async () => {
      const response = await axios.get(
        'https://api.github.com/users/MariaGabrielaReis/repos'
      );
      return response.data;
    },
    {
      staleTime: 1000 * 60, // 1 minute
    }
  );

  return (
    <ul>
      {isLoading && <p>Carregando...</p>}
      {repos?.map(repo => {
        return (
          <li key={repo.full_name}>
            <a href={`repos/${repo.full_name}`}>{repo.full_name}</a>
            <p>{repo.description}</p>
          </li>
        );
      })}
    </ul>
  );
}
