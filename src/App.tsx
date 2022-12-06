import { useEffect, useState } from 'react';

type Repository = {
  full_name: string;
  description: string;
};

function App() {
  const [repos, setRepos] = useState<Repository[]>([]);

  useEffect(() => {
    fetch('https://api.github.com/users/MariaGabrielaReis/repos')
      .then(response => response.json())
      .then(data => setRepos(data));
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
