import {useState, useEffect} from 'react';
import {RepositoriesType} from '../@types/repository';

const useRepositories = () => {
  const [repositories, setRepositories] = useState<RepositoriesType>();
  const [loading, setLoading] = useState(false);

  const fetchRepositories = async () => {
    setLoading(true);

    const response = await fetch('http://10.0.2.2:5000/api/repositories');
    const json = await response.json();

    setLoading(false);
    setRepositories(json);
  };

  useEffect(() => {
    fetchRepositories();
  }, []);

  return {repositories, loading, refetch: fetchRepositories};
};

export default useRepositories;
