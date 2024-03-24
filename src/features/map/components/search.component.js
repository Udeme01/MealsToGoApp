import React, { useContext, useEffect, useState } from "react";
import { View } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components";
import { LocationContext } from "../../../services/location/location.context";
import { StatusBar } from "react-native";

const SearchWrapper = styled(View)`
  padding: ${({ theme }) => theme.space[3]};
  position: absolute;
  z-index: 999;
  width: 100%;
  margin-top: ${StatusBar.currentHeight}px;
`;

export const Search = () => {
  const { keyword, search } = useContext(LocationContext); // this just needs to know what the keyword is gonna be once you've submitted you're searched keyword...

  //   the default value for the "searchKeyword" variable is gonna be a value on/from "LocationContext" component;
  const [searchKeyword, setSearchKeyword] = useState(keyword); // so we're actually tracking local state here bcos the 'Search component' need to be able to track what the search keyword is that you're filling in...

  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);

  return (
    <SearchWrapper>
      <Searchbar
        value={searchKeyword}
        placeholder="Search for a location"
        icon="map"
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
        onChangeText={(text) => {
          setSearchKeyword(text);
        }}
      />
    </SearchWrapper>
  );
};
