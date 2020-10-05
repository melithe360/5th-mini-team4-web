import React, { useEffect, useState } from "react";
import "./Assessment.css";
import Search from "./Search";

const Assessment = () => {
  const [search, setSearch] = useState("");

  const getDatas = async () => {
    //const data = await axios.get("");
  };

  useEffect(() => {
    //getDatas();
  }, []);

  const onChange = (e) => {
    setSearch(e.target.value);
  };

  //const filterList = assessment.filter( info => info.name.indexOf(search) !== -1 )
  return (
    <>
    <div></div>
     <Search onChange={onChange} value={search}></Search>
    </>

  );
};

export default Assessment;
