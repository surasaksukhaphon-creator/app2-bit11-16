import { View, Text, StyleSheet, FlatList } from 'react-native';

import products from '@/data/products.json';

import  ProductCard  from '@/component/productCard'

export default function Index () {
    return(
      <View style={styles.container}>
        <Text style={styles.title_Top}> Product List </Text>

        <FlatList
        // ข้อมูลมาจากไหน
          data={products}

        // key หลักคืออะไร
        keyExtractor={(item) => item.id}

        // ใช่ ui หน้าตาแบบไหนแสดงผล
        renderItem={({item}) => (
          <ProductCard
            id ={item.id}
            name={item.name}
            price={item.price}
            image={item.image}
          />
        )}

        style={{width: "90%"}}

        />
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    title_Top: {
      marginRight:"40%",
      fontSize: 40
    }
  });