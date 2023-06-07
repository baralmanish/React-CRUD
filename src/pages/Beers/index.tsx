import { FC, useEffect, useState } from "react";

import { Space } from "antd";

import Card from "../../components/Card";
import Empty from "../../components/Empty";

import BeerService from "../../services/beer.service";

import { IBeer } from "../../interfaces/beer";

const Beers: FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<IBeer[]>([]);

  useEffect(() => {
    (async () => {
      await fetchData();
    })();
  }, []);

  const fetchData = async () => {
    setData([]);
    setIsLoading(true);

    const response = await BeerService.get();
    if (response?.status === 200) {
      setData(response.data);
    }

    setIsLoading(false);
  };

  if (!data.length) {
    return <Empty>Click here to add your first Beer</Empty>;
  }

  return (
    <Space direction="vertical" size={16}>
      {data.map(d => (
        <Card key={d.id} beer={d} />
      ))}
    </Space>
  );
};

export default Beers;
