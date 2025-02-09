import React, { useEffect, useState } from "react";
import Header from "../components/common/Header";
import TabsComponent from "../components/Dashboard/Tabs";
import Search from "../components/Dashboard/Search";
import PaginationComponent from "../components/Dashboard/Pagination";
import Loader from "../components/common/Loader";
import BackToTop from "../components/common/BackToTop";
import { get100Coins } from "../functions/get100Coins";

function DashboardPage() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);  
  const [isLoading, setIsLoading] = useState(true);
  const [paginatedCoins, setPaginatedCoins] = useState([]);

  const handlePageChange = (event, value) => {
    setPage(value);
    const previousIndex = (value - 1) * 10;
    setPaginatedCoins(coins.slice(previousIndex, previousIndex + 10));
  };

  const onSearchChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => { 
    getData();
   }, []);

  const getData =async()=>{
    const myCoins=await get100Coins();
    if(myCoins){
      setCoins(myCoins);
      setPaginatedCoins(myCoins.slice(0, 10));
      setIsLoading(false);
    }
  };

  const filteredCoins = coins.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.symbol.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Header />
      <BackToTop/>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <Search search={search} onSearchChange={onSearchChange} />
          <TabsComponent coins={search ? filteredCoins : paginatedCoins} />
          {!search && (
            <PaginationComponent page={page} handlePageChange={handlePageChange} />
          )}
        </div>
      )}
    </>
  );
}

export default DashboardPage;
