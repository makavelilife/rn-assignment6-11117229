import React, { useState, useEffect } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import CartItem from "./citem";
import AsyncStorage from "@react-native-async-storage/async-storage";

const CartScreen = ({ navigation }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const loadCart = async () => {
      const storedCart = await AsyncStorage.getItem("cart");
      if (storedCart) {
        setCartItems(JSON.parse(storedCart));
      }
    };
    loadCart();
  }, []);

  const removeFromCart = async (productId) => {
    const updatedCart = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCart);
    await AsyncStorage.setItem("cart", JSON.stringify(updatedCart));
    if (navigation.setParams) {
      navigation.setParams({ cartUpdated: Date.now() });
    }
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  const handleCheckout = () => {
    console.log("Proceeding to checkout");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Open Fashion</Text>
      <Text style={styles.subHeader}>CHECKOUT</Text>
      <FlatList
        data={cartItems}
        renderItem={({ item }) => (
          <CartItem product={item} onRemoveFromCart={removeFromCart} />
        )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
      />
      <View style={styles.footer}>
        <View style={styles.totalContainer}>
          <Text style={styles.totalText}>EST. TOTAL</Text>
          <Text style={styles.totalAmount}>${calculateTotal()}</Text>
        </View>
        <TouchableOpacity
          style={styles.checkoutButton}
          onPress={handleCheckout}
        >
          <Image
            source={require("../assets/shoppingBag.png")}
            style={styles.checkoutIcon}
          />
          <Text style={styles.checkoutText}>CHECKOUT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 40,
    marginBottom: 10,
  },
  subHeader: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 20,
  },
  listContent: {
    paddingBottom: 100, // Add padding to account for the footer
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "white",
  },
  totalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
  totalText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  totalAmount: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#ff6347",
  },
  checkoutButton: {
    backgroundColor: "black",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
  },
  checkoutIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  checkoutText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default CartScreen;