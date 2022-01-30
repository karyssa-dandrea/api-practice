import React, { useEffect, useState } from 'react';
import { getVillager } from '../../services/ach';
import Controls from '../../components/Controls/Controls';
import Details from '../../components/Controls/Details/Details';

export default function Home() {
  const [villagers, setVillagers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchInput, setSearchInput] = useState('');
  const [searchVill, setSearchVill] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getVillager();
      setVillagers(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  const handleSearch = () => {
    let filter = villagers.filter((villager) =>
      villager.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    setSearchVill(filter);
  };

  if (loading) {
    return <h1> Loading...</h1>;
  }

  return (
    <div>
      <Controls
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        handleSearch={handleSearch}
        setVillagers={setVillagers}
      />
      <Details villagers={villagers} searchVill={searchVill} />
    </div>
  );
}
