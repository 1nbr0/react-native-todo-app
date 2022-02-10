import { StyleSheet, Text, View } from "react-native";

export const Title = ({ before=undefined, text, after=undefined }) => {
  return (
    <View style={styles.titleContainer} > 
      {before && <Text style={styles.particule} >{before}</Text>}
      <Text style={styles.body} >{text}</Text>
      {after && <Text style={styles.particule} >{after}</Text>}
    </View>
  )
};

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    paddingVertical: 6,
    fontSize: 20,
  },
  particule: {
    color: 'purple',
    fontSize: 40,
    fontWeight: 'bold'
  },
  body: {
    color: 'black',
    fontSize: 40,
    fontWeight: 'bold'
  }
})
