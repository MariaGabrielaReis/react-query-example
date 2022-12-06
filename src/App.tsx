import { useAPI } from './hooks/useAPI';

type Repository = {
  full_name: string;
  description: string;
};

function App() {
  const { data: repos, isLoading } = useAPI<Repository[]>(
    'users/MariaGabrielaReis/repos'
  );

  return (
    <ul>
      {isLoading && <p>Carregando...</p>}
      {repos?.map(repo => {
        return (
          <li key={repo.full_name}>
            <strong>{repo.full_name}</strong>
            <p>{repo.description}</p>
          </li>
        );
      })}
    </ul>
  );
}

export default App;
