import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const ProductItem = ({ product, onAddToCart }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={product.image} style={styles.image} />
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => onAddToCart(product)}
        >
          <Image
            source={require("../assets/add_circle.png")} // Replace with your actual icon
            style={styles.addButtonImage}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>${product.price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 8,
    padding: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
    alignItems: "center",
  },
  imageContainer: {
    position: "relative",
    marginBottom: 8,
  },
  image: {
    width: 190,
    height: 240,
    resizeMode: "cover",
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  price: {
    fontSize: 14,
    color: "#888",
  },
  addButton: {
    position: "absolute",
    bottom: 10,
    right: 10,

    borderRadius: 15,
    padding: 5,
  },
  addButtonImage: {
    width: 20,
    height: 20,
  },
  //help
});

export default ProductItem;