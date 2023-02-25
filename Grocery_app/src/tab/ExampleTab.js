import { ScrollView, StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'
import ProductItem from '../components02/ProductItem'

const ExampleTab = () => {
    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.scrollView}>
                    <View style={{marginEnd:20}}>
                        {
                            dataLord.filter((_, i) => i % 2 === 0).map((item) => <View key={item._id} style={{ marginTop: 10 }} >
                                <ProductItem />
                            </View>)
                        }

                    </View>
                    <View>
                        <Image style={styles.img}  source={require('../image/Group7066.png')}/>
                        {
                            dataLord.filter((_, i) => i % 2 !== 0).map((item) => <View key={item._id} style={{ marginTop: 10}} >
                                <ProductItem />
                            </View>)
                        }

                    </View>
                </View>
            </ScrollView>

        </View>
    )
}

export default ExampleTab

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        alignSelf:'center'

    },
    scrollView: {
        flexDirection: 'row',
    },
    img:{
        marginTop:10
    }
})

const dataLord = [
    { "_id": "1" },
    { "_id": "2" },
    { "_id": "3" },
    { "_id": "4" },
    { "_id": "5" },
    { "_id": "6" },
    { "_id": "7" },
    { "_id": "8" },
    { "_id": "9" },
    { "_id": "10" },
    { "_id": "11" },
    { "_id": "12" },
    { "_id": "13" },
    { "_id": "14" },
    { "_id": "15" },
    { "_id": "16" },
    { "_id": "17" },
    { "_id": "18" },
    { "_id": "19" },
    { "_id": "20" },
    { "_id": "21" },
]