import React from 'react';
import {useRecipesDispatch} from '../../redux/RecipesProvider';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

export default function ListedRecipe({recipe}) {
  const dispatch = useRecipesDispatch();

  return (
    <View>
      <Text style={styles.title}>{recipe.title}</Text>
      <div>
        <Text style={styles.info}>{recipe.author}</Text>
        <Text style={styles.info}>{recipe.id}</Text>
      </div>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    margin: 0,
    borderBottom: 1,
    backgroundColor: '#72A0C1',
    alignItems: 'left',
    justifyContent: 'start',
  },
  title: {
    color: '#1B3855',
    fontFamily: 'Helvetica',
    fontWeight: 30,
    fontSize: 20,
  },
  info: {
    color: '#1B3855',
    fontFamily: 'Helvetica',
    fontWeight: 15,
    fontSize: 12,
  },
});
