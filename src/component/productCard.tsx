import { Image, StyleSheet, Text, View } from 'react-native';

type ProductCardProps = {
    id: string,
    name: string,
    price: string,
    image: string
}

export default function ProductCard({id, name, price, image}:ProductCardProps) {
    return(
        <View style={styles.box}>
            <Image source={{uri: image}} width={100} height={100} />
        <View>
            <Text style={styles.title_Top}>{name} </Text>
            <Text style={styles.title_Top}> Price{price}</Text>
            <Text style={styles.title_Top}> ID {id} </Text>
            </View>
        </View>

        
    )
}

const styles = StyleSheet.create({
    box: {
        width: "90%",
        backgroundColor: 'grey',
        flexDirection:"row",
        margin:10,
        borderRadius: 16,
        padding:10,
    },
    title_Top: {
    fontSize: 20
    }
});