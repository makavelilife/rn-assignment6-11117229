import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const CartItem = ({ product, onRemoveFromCart }) => {
  return (
    <View style={styles.cartItemContainer}>
      <Image source={product.image} style={styles.cartItemImage} />
      <View style={styles.cartItemDetails}>
        <Text style={styles.cartItemName}>{product.name}</Text>
        <Text style={styles.cartItemPrice}>${product.price}</Text>
      </View>
      <TouchableOpacity style={styles.removeButton} onPress={() => onRemoveFromCart(product.id)}>
        <Ionicons name="trash" size={24} color="red" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cartItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 2,
  },
  cartItemImage: {
    width: 60,
    height: 60,
    marginRight: 16,
    resizeMode: "contain",
  },
  cartItemDetails: {
    flex: 1,
  },
  cartItemName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  cartItemPrice: {
    fontSize: 14,
    color: "#888",
  },
  removeButton: {
    padding: 8,
  },
});

export default CartItem;
