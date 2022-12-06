import { useEffect, useState } from 'react';
import axios from 'axios';

type Repository = {
  full_name: string;
  description: string;
};

function App() {
  const [repos, setRepos] = useState<Repository[]>([]);

  useEffect(() => {
    axios
      .get('https://api.github.com/users/MariaGabrielaReis/repos')
      .then(response => setRepos(response.data));
  }, []);
  return (
    <ul>
      {repos.map(repo => {
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
