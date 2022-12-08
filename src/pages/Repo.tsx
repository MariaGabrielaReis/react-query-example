import { useParams } from 'react-router-dom';

export function Repo() {
  const params = useParams();
  const currentRepo = params['*'] as string;

  return <h1>{currentRepo}</h1>;
}
