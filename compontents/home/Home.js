import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, TextInput,} from 'react-native'
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/FontAwesome';
import Button from 'react-native-button';

export default class Home extends Component {
    render() {
        const styles = StyleSheet.create({

            wrapper: {
            },
            slide: {
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            },
            box: {
                flex: 1,
                backgroundColor: '#f5f5f5'
            },
            top: {
                flexDirection: 'row',
                width: '100%',
                height: 50,
                backgroundColor: '#f23030',
                alignItems: 'center',
                justifyContent: 'center'

            },
            search: {
                flexDirection: 'row',
                width: '80%',
                height: 35,
                borderRadius: 17.5,
                backgroundColor: '#fbb8b8',
                alignItems: 'center',
                justifyContent: 'flex-start',
                paddingLeft: 20,
                marginRight: 15
            },
            content: {
                flexDirection: 'column',
                justifyContent: 'center',
                alignContent: 'center'
            },
            contentmian: {
                width: '100%',
                height: 80,
                backgroundColor: '#ffffff',
                marginTop: 8,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-around'
            },
            contentLeft: {
                width: "45%",
                height: 80,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',

            },
            contentRight: {
                width: "45%",
                height: 80,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-end'
            },
            contextImg1: {
                width: 70,
                height: 70,
                backgroundColor: '#ffcccc',
                marginRight: 20,
                borderRadius: 35,
                alignItems: 'center',
                justifyContent: 'center',
            },
            contextImg2: {
                width: 70,
                height: 70,
                backgroundColor: '#ffe1b1',
                marginRight: 20,
                borderRadius: 35,
                alignItems: 'center',
                justifyContent: 'center'
            },
            contextImg3: {
                width: 70,
                height: 70,
                backgroundColor: '#bfe6a8',
                marginRight: 20,
                borderRadius: 35,
                alignItems: 'center',
                justifyContent: 'center'
            },
            contextImg4: {
                width: 70,
                height: 70,
                backgroundColor: '#c3ddf2',
                marginRight: 20,
                borderRadius: 35,
                alignItems: 'center',
                justifyContent: 'center'
            },
            foot: {
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            },
            footButton: {
                marginTop: 25,
                width: "70%",
                height: 60,
                backgroundColor: 'red',
                marginBottom: 50,
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center'
            },
            font: {
                color: '#767676',
                fontSize: 12
            }
        });
        return (
            <View style={styles.box}>
                <View style={styles.top}>
                    <View style={styles.search}>
                        <Icon name="search" size={20} color={'#ffffff'} />
                        <TextInput placeholder='请输入您要搜索的关键字'
                            placeholderTextColor="#ffffff"
                        />
                    </View>
                    <Icon name="shopping-cart" size={20} color={'#ffffff'} />
                </View>
                <View style={{ width: '100%', height: 200 }}>
                    <Swiper style={styles.wrapper} showsButtons={false}>
                        <View style={styles.slide}>
                            <Image source={require('../../assets/icon/server1.png')} style={{ width: "100%", height: "100%" }} />
                        </View>
                        <View style={styles.slide}>
                            <Image source={require('../../assets/icon/server2.png')} style={{ width: "100%", height: "100%" }} />
                        </View>
                    </Swiper>
                </View>
                <View style={styles.content}>
                    <View style={styles.contentmian}>
                        <View style={styles.contentLeft}>
                            <View style={styles.contextImg1}>
                                <Image source={require('../../assets/icon/server4.png')} style={{ width: "65%", height: "65%" }} />
                            </View>
                            <Text style={{ fontSize: 16 }}>居家维修包养</Text>
                        </View>
                        <View style={styles.contentRight}>
                            <Icon name="chevron-right" size={20} color={'#d8d8d8'} />
                        </View>
                    </View>
                    <View style={styles.contentmian}>
                        <View style={styles.contentLeft}>
                            <View style={styles.contextImg2}>
                                <Image source={require('../../assets/icon/server5.png')} style={{ width: "65%", height: "65%" }} />
                            </View>
                            <Text style={{ fontSize: 16, marginRight: 20 }}>住宿优惠</Text>
                        </View>
                        <View style={styles.contentRight}>
                            <Icon name="chevron-right" size={20} color={'#d8d8d8'} />
                        </View>
                    </View>
                    <View style={styles.contentmian}>
                        <View style={styles.contentLeft}>
                            <View style={styles.contextImg3}>
                                <Image source={require('../../assets/icon/server6.png')} style={{ width: "65%", height: "65%" }} />
                            </View>
                            <Text style={{ fontSize: 16, marginRight: 20 }}>出行接受</Text>
                        </View>
                        <View style={styles.contentRight}>
                            <Icon name="chevron-right" size={20} color={'#d8d8d8'} />
                        </View>
                    </View>
                    <View style={styles.contentmian}>
                        <View style={styles.contentLeft}>
                            <View style={styles.contextImg4}>
                                <Image source={require('../../assets/icon/server3.png')} style={{ width: "65%", height: "65%" }} />
                            </View>
                            <Text style={{ fontSize: 16, marginRight: 20 }}>E组活动</Text>
                        </View>
                        <View style={styles.contentRight}>
                            <Icon name="chevron-right" size={20} color={'#d8d8d8'} />
                        </View>
                    </View>
                </View>

                <View style={styles.foot}>
                    {/* <View style={styles.footButton}> */}
                        {/* <Text style={{ color: 'white' }}>发布需求</Text> */}
                        <Button
                            style={{
                                padding:15,
                                marginTop: 25,
                                width: 360,
                                height: 60,
                                backgroundColor: 'red',
                                marginBottom: 50,
                                borderRadius: 10,
                                justifyContent: 'center',
                                alignItems: 'center',
                                color:'white',
                                
                            }}
                        >发布需求</Button>
                    {/* </View> */}
                    <View>
                        <Text style={styles.font}>©E组之家  版权所以</Text>
                    </View>
                </View>
            </View>

        )
    }
}
