import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    FlatList,
    Dimensions,
    ScrollView,
    Image
} from 'react-native';
export default class MyList extends Component {
    render() {
        const { width } = Dimensions.get('window')
        const styles = StyleSheet.create({
            slide: {
                width: width * 0.44,
                height: 300,
                backgroundColor: 'white',
                justifyContent: 'center',
                alignItems: 'center',
                padding: 10
            }
        });
        return (
            <View style={{ backgroundColor: '#f4f4f4' }}>
                <ScrollView>
                    <View style={{ backgroundColor: 'white' }}>
                        <View style={{ flexDirection: 'row', height: 40, justifyContent: 'center', marginTop: 10, marginBottom: 10 }}>
                            <View style={{
                                flexDirection: 'row',
                                width: '90%',
                                borderRadius: 5,
                                backgroundColor: '#eeeeee',
                                alignItems: 'center',
                                paddingLeft: 5,
                                flexDirection: 'row',
                                justifyContent: 'space-between'
                            }}>
                                <TextInput placeholder='请输入商品名称'
                                    placeholderTextColor="#999999"
                                />
                                <Image style={{ width: 20, height: 20, marginRight: 20 }} source={require('../../assets/icon/search.png')} />

                            </View>
                        </View>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                            flexWrap: 'wrap',
                            height: 50,
                            borderBottomColor: '#dedede',
                            borderBottomWidth: 1,
                            borderTopColor: '#dedede',
                            borderTopWidth: 1,
                            paddingTop: 15
                        }}>
                            <Text style={{ color: 'red' }}>综合</Text>
                            <Text>销量</Text>
                            <Text>新品</Text>
                            <Text>价格</Text>
                            <Text>信用</Text>

                        </View>
                    </View>
                    <View style={{ flexDirection: 'column' }}>
                        <View style={{ width: "100%", height: 300, justifyContent: 'space-around', flexDirection: 'row', marginTop: 10, }}>
                            <View style={styles.slide}>
                                <Image source={require('../../assets/icon/one.png')} style={{ width: 145, height: 165, marginBottom: 25 }} />
                                <View>
                                    <Text style={{ fontSize: 13, color: '#b7b7b7', marginBottom: 10 }}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
                                    <Text style={{ fontSize: 13, color: '#f23030' }}>36.00</Text>
                                </View>
                            </View>
                            <View style={styles.slide}>
                                <Image source={require('../../assets/icon/tow.png')} style={{ width: 145, height: 165, marginBottom: 25 }} />
                                <View>
                                    <Text style={{ fontSize: 13, color: '#b7b7b7', marginBottom: 10 }}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
                                    <Text style={{ fontSize: 13, color: '#f23030' }}>36.00</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ width: "100%", height: 300, justifyContent: 'space-around', flexDirection: 'row', marginTop: 10, }}>
                            <View style={styles.slide}>
                                <Image source={require('../../assets/icon/one.png')} style={{ width: 145, height: 165, marginBottom: 25 }} />
                                <View>
                                    <Text style={{ fontSize: 13, color: '#b7b7b7', marginBottom: 10 }}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
                                    <Text style={{ fontSize: 13, color: '#f23030' }}>36.00</Text>
                                </View>
                            </View>
                            <View style={styles.slide}>
                                <Image source={require('../../assets/icon/tow.png')} style={{ width: 145, height: 165, marginBottom: 25 }} />
                                <View>
                                    <Text style={{ fontSize: 13, color: '#b7b7b7', marginBottom: 10 }}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
                                    <Text style={{ fontSize: 13, color: '#f23030' }}>36.00</Text>
                                </View>
                            </View>
                        </View><View style={{ width: "100%", height: 300, justifyContent: 'space-around', flexDirection: 'row', marginTop: 10, }}>
                            <View style={styles.slide}>
                                <Image source={require('../../assets/icon/one.png')} style={{ width: 145, height: 165, marginBottom: 25 }} />
                                <View>
                                    <Text style={{ fontSize: 13, color: '#b7b7b7', marginBottom: 10 }}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
                                    <Text style={{ fontSize: 13, color: '#f23030' }}>36.00</Text>
                                </View>
                            </View>
                            <View style={styles.slide}>
                                <Image source={require('../../assets/icon/tow.png')} style={{ width: 145, height: 165, marginBottom: 25 }} />
                                <View>
                                    <Text style={{ fontSize: 13, color: '#b7b7b7', marginBottom: 10 }}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
                                    <Text style={{ fontSize: 13, color: '#f23030' }}>36.00</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ height: 100, width: "100%" }}></View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}
