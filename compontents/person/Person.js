import React, { Component } from 'react'
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity, AsyncStorage } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import ImagePicker from 'react-native-image-picker';
import { Actions } from "react-native-router-flux";
const options = {
    title: 'Select Avatar',
    customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
    storageOptions: {
        skipBackup: true,
        path: 'images',
    },
};
export default class Person extends Component {
    constructor() {
        super();
        this.state = {
            avatarSource: require('../../assets/icon/person.png')
        }
    }
    componentDidMount() {
        AsyncStorage.getItem('image')
            .then((res) => {
                const imgsrc = { uri: res };
                if (res == null) {
                    this.setState({
                        avatarSource: require('../../assets/icon/person.png')
                    })
                }
                else {
                    this.setState({
                        avatarSource: imgsrc,
                    });
                }
            });
    }

    storeData = async (img) => {
        await AsyncStorage.setItem('image', img,
            () => { console.log('store success') }
        )
    }
    getData = () => {
        AsyncStorage.getItem('image')
            .then((res) => console.log(res));
    }
    tackpicker = () => {
        ImagePicker.showImagePicker(options, (response) => {
            if (response.didCancel) {
                return;
            } else if (response.error) {
                console.log('Error:', response.error);
            } else if (response.customButton) {
                console.log('custom:', response.customButton);
            } else {
                const source = { uri: response.uri };

                this.setState({
                    avatarSource: source,
                });
                this.storeData(source.uri)
                this.getData()
            }
        });


    }
    render() {
        const styles = StyleSheet.create({
            box: {
                backgroundColor: "#eeeeee",
            },
            backimg: {
                height: 220,
                width: '102%',
            },
            top: {
                width: '100%',
                height: 220,
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column'
            },
            person: {
                width: 84,
                height: 84,
                borderRadius: 42,
                justifyContent: 'center',
                alignItems: 'center',
                borderColor: 'white',
                borderWidth: 3
            },
            name: {
                marginTop: 15,
                fontSize: 18,
                color: 'white'
            },
            mian: {
                width: '100%',
                height: 260,
                backgroundColor: 'white',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            },
            title: {
                width: '100%',
                height: 50,
                borderBottomColor: '#eeeeee',
                borderBottomWidth: 2,
                flexDirection: 'row',
                alignItems: 'center'
            },
            row: {
                width: '100%',
                height: 70,
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center'
                // backgroundColor:'blue'
            },
            commul: {
                width: '33%',
                height: 70,
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            },
            font: {
                marginTop: 10,
                color: "#727171",
            },
            content: {
                marginTop: 10,
                width: '100%',
                height: 190,
                backgroundColor: 'white',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            },
            foot: {
                width: '100%',
                height: 100,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center'
            }
        })
        return (
            <View style={styles.box}>
                <ImageBackground
                    style={styles.backimg}
                    source={require('../../assets/icon/person1.png')}
                    resizeMode='stretch'>
                    <View style={styles.top} ><TouchableOpacity onPress={() => this.tackpicker()}>
                        <View style={styles.person} >
                            <Image
                                source={this.state.avatarSource}
                                resizeMode='contain'
                                style={{ width: 80, height: 80, borderRadius: 60 }}
                                imageStyle={{ borderRadius: 60 }}
                            />

                        </View></TouchableOpacity>
                        <Text style={styles.name} >BINNU DHILLON</Text>
                    </View>
                </ImageBackground >
                <View style={styles.mian}>
                    <View style={styles.title}>
                        <Image
                            source={require('../../assets/icon/person2.png')}
                            style={{ width: 25, height: 25, marginLeft: 15, marginRight: 15 }}
                            resizeMode='contain'
                        />
                        <Text >我的个人中心</Text>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.commul}>
                            <Image source={require('../../assets/icon/person9.png')} />
                            <Text style={styles.font}>账户管理</Text>
                        </View>
                        <View style={styles.commul}>
                            <Image source={require('../../assets/icon/person8.png')} />
                            <Text style={styles.font}>收货地址</Text>
                        </View>
                        <View style={styles.commul}>
                            <Image source={require('../../assets/icon/person7.png')} />
                            <Text style={styles.font}>我的信息</Text>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.commul}>
                            <Image source={require('../../assets/icon/person6.png')} />
                            <Text style={styles.font}>我的订单</Text>
                        </View>
                        <View style={styles.commul}>
                            <Image source={require('../../assets/icon/person5.png')} />
                            <Text style={styles.font}>我的二维码</Text>
                        </View>
                        <View style={styles.commul}>
                            <Image source={require('../../assets/icon/person4.png')} />
                            <Text style={styles.font}>我的积分</Text>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.commul}>
                            <Image source={require('../../assets/icon/person3.png')} />
                            <Text style={styles.font}>我的收藏</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.content}>
                    <View style={styles.title}>
                        <Image
                            source={require('../../assets/icon/person16.png')}
                            style={{ width: 25, height: 25, marginLeft: 15, marginRight: 15 }}
                            resizeMode='contain' />
                        <Text >E组活动</Text>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.commul}>
                            <Image source={require('../../assets/icon/person10.png')} />
                            <Text style={styles.font}>居家维修保养</Text>
                        </View>
                        <View style={styles.commul}>
                            <Image source={require('../../assets/icon/person11.png')} />
                            <Text style={styles.font}>出行接送</Text>
                        </View>
                        <View style={styles.commul}>
                            <Image source={require('../../assets/icon/person12.png')} />
                            <Text style={styles.font}>我的受益人</Text>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.commul}>
                            <Image source={require('../../assets/icon/person13.png')} />
                            <Text style={styles.font}>我的住宿优惠</Text>
                        </View>
                        <View style={styles.commul}>
                            <Image source={require('../../assets/icon/person14.png')} />
                            <Text style={styles.font}>我的活动</Text>
                        </View>
                        <View style={styles.commul} >
                            <TouchableOpacity onPress={ Actions.release}
                                style={{ flexDirection: 'column', alignItems: 'center' }}>
                                <Image source={require('../../assets/icon/person15.png')} />
                                <Text style={styles.font} >我的发布</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={styles.foot}>
                    <TouchableOpacity onPress={() => {
                        AsyncStorage.getItem("user")
                            .then(res => {
                                if (res) {
                                    AsyncStorage.removeItem("user")
                                        .then((error) => console.log(error));
                                    Actions.login()
                                } else {
                                    console.log("请登录")
                                }
                            })
                    }}>
                        <Text style={{ fontSize: 16, color: "#a4a4a4" }} >BINNU DHILLON | 退出</Text>
                    </TouchableOpacity>
                </View>
            </View >


        )
    }
}
