import React, { useState } from "react";
import { ScrollView } from "react-native";
import { List } from "react-native-paper";
import { RestaurantInfoComponents } from "../components/restaurant-info.component";

export const RestaurantDetail = ({ route }) => {
  const [breakfastExpanded, setBreakfastExpanded] = useState(false);
  const [lunchExpanded, setLunchExpanded] = useState(false);
  const [dinnerExpanded, setDinnerExpanded] = useState(false);
  const [drinksExpanded, setDrinksExpanded] = useState(false);

  const { restaurant } = route.params;
  return (
    <>
      <RestaurantInfoComponents restaurant={restaurant} />
      <ScrollView>
        {/* BREAK-FAST */}
        <List.Accordion
          title="Breakfast"
          left={(props) => <List.Icon {...props} icon="bread-slice" />}
          expanded={breakfastExpanded}
          // onPress, if the current value of "breakfastExpanded" is 'true' it reverts to 'false' and vice-versa.
          onPress={() => setBreakfastExpanded(!breakfastExpanded)}
        >
          <List.Item title="Eggs Benedict" />
          <List.Item title="Classic Breakfast" />
        </List.Accordion>

        {/* LUNCH */}
        <List.Accordion
          title="Lunch"
          left={(props) => <List.Icon {...props} icon="food" />}
          expanded={lunchExpanded}
          // onPress, if the current value of "breakfastExpanded" is 'true' it reverts to 'false' and vice-versa.
          onPress={() => setLunchExpanded(!lunchExpanded)}
        >
          <List.Item title="Burger w/fries" />
          <List.Item title="Steak Sandwich" />
          <List.Item title="Mushroom Soup" />
        </List.Accordion>

        {/* DINNER */}
        <List.Accordion
          title="Dinner"
          left={(props) => <List.Icon {...props} icon="food-turkey" />}
          expanded={dinnerExpanded}
          // onPress, if the current value of "breakfastExpanded" is 'true' it reverts to 'false' and vice-versa.
          onPress={() => setDinnerExpanded(!dinnerExpanded)}
        >
          <List.Item title="Spaghetti Bolognese" />
          <List.Item title="Veal Cutlet with Chicken Mushroom Rotini" />
          <List.Item title="Steak Frites" />
        </List.Accordion>

        {/* DRINKS */}
        <List.Accordion
          title="Drinks"
          left={(props) => <List.Icon {...props} icon="food-fork-drink" />}
          expanded={drinksExpanded}
          // onPress, if the current value of "breakfastExpanded" is 'true' it reverts to 'false' and vice-versa.
          onPress={() => setDrinksExpanded(!drinksExpanded)}
        >
          <List.Item title="Coffee" />
          <List.Item title="Tea" />
          <List.Item title="Modelo" />
          <List.Item title="Coke" />
          <List.Item title="Fanta" />
        </List.Accordion>
      </ScrollView>
    </>
  );
};
