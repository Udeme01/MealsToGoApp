import React from "react";
import styled from "styled-components";

import { ActivityIndicator, MD2Colors } from "react-native-paper";
import {
  View,
  SafeAreaView,
  StatusBar,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { RestaurantInfoComponents } from "../components/restaurant-info.component";
import { Spacer } from "../../../components/spacer/spacer.component";

import { useContext } from "react";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { Search } from "../components/search.component";

// styled components here!
const SafeArea = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${StatusBar.currentHeight}px;
`;

const LoadingContainer = styled(View)`
  position: absolute;
  top: 50%;
  left: 50%;
`;

const Loading = styled(ActivityIndicator)`
  margin-left: -20px;
`;

// RestaurantScreens Arrow Function Here!
export const RestaurantScreens = ({ navigation }) => {
  const { restaurants, error, isLoading } = useContext(RestaurantsContext);
  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading size="large" animating={true} color={MD2Colors.red500} />
        </LoadingContainer>
      )}
      <Search />
      <FlatList
        data={restaurants}
        renderItem={({ item }) => (
          <>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RestaurantDetail", { restaurant: item })
              }
            >
              <Spacer position="bottom" size="large">
                <RestaurantInfoComponents restaurant={item} />
              </Spacer>
            </TouchableOpacity>
          </>
        )}
        keyExtractor={(item) => item.name}
        // esling-disabled next line
        contentContainerStyle={{ padding: 16 }}
      />
    </SafeArea>
  );
};

// for safeArea at Top;
// margin-top: ${StatusBar.currentHeight}px;
