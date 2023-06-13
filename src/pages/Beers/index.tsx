import { FC, useEffect, useState } from "react";

import { Button, Space, Spin } from "antd";
import { DownOutlined } from "@ant-design/icons";

import Card from "../../components/Card";
import Empty from "../../components/Empty";
import Loading from "../../components/Loading";

import BeerService from "../../services/beer.service";
import { IBeer } from "../../interfaces/beer";

import { perPage } from "../../constants";

import "./style.scss";

interface IBeerProps {
  isMine?: boolean;
  setShowAddBeerModal?: (showAddBeerModal: boolean) => void;
}

const Beers: FC<IBeerProps> = ({ isMine, setShowAddBeerModal }: IBeerProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [beer, setBeer] = useState<IBeer[]>([]);
  const [page, setPage] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      if (!isMine) {
        await fetchData();
      }
    })();
  }, [page]);

  const fetchData = async () => {
    if (page === 1) {
      setBeer([]);
      setIsLoading(true);
    } else {
      setIsLoadingMore(true);
    }

    const response = await BeerService.get(page);
    if (response?.status === 200) {
      const thisBeer = response.data;
      if (page > 1) {
        setBeer([...beer, ...thisBeer]);
      } else {
        setBeer(thisBeer);
      }
      console.log(">>> thisBeer.length", thisBeer.length, perPage);
      if (thisBeer.length === Number(perPage)) {
        setHasMore(true);
      }
    }

    setIsLoading(false);
    setIsLoadingMore(false);
  };

  if (isLoading) {
    return <Loading>Please wait while loading beers...</Loading>;
  }

  if (isMine && setShowAddBeerModal && !beer.length) {
    return (
      <Empty>
        <div>
          <span onClick={() => setShowAddBeerModal(true)}>Click here</span> to add your first Beer
        </div>
      </Empty>
    );
  }

  const handleLoadMore = () => {
    setPage(p => p + 1);
  };

  return (
    <Space direction="vertical" size={20} style={{ width: "100%" }}>
      {beer.map(d => (
        <Card key={d.id} beer={d} />
      ))}
      {hasMore && (
        <div className="load-more-container">
          <Button type="link" disabled={isLoadingMore} className="load-more-container__button" onClick={handleLoadMore}>
            {isLoadingMore ? (
              <>
                Loading More <Spin />
              </>
            ) : (
              <>
                Load More <DownOutlined />
              </>
            )}
          </Button>
        </div>
      )}
    </Space>
  );
};

export default Beers;
