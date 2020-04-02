import React, { Component } from 'react'
import { Text, View, StyleSheet, ToastAndroid } from 'react-native'
import Button from 'react-native-button';
export default class Release extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            content: [],
            limit: 0,
            wait: false
        }
    }

    componentDidMount() {
        this.setState({ wait: true })
        fetch('https://cnodejs.org/api/v1/topics')
            .then(res => res.json())
            .then(res => {
                this.setState({ content: [] });
                this.setState({ data: res.data });
                this.setState({ wait: false })
                for (var i = this.state.limit * 10; i < this.state.limit * 10 + 10; i++) {
                    if (res.data[i].title.length >= 15 || res.data[i].create_at.length >= 15) {
                        this.setState(() => this.state.content.push({ title: res.data[i].title.substr(0, 15) + "...", time: res.data[i].create_at.substr(0, 9), reply: parseInt(Math.random() * 2) }))
                    }
                    else {
                        this.setState(() => this.state.content.push({ title: res.data[i].title, time: res.data[i].create_at.substr(0, 9), reply: parseInt(Math.random() * 2) }))
                    }

                }
            })
    }
    previous = () => {
        if (this.state.limit == 0) {
            ToastAndroid.show('别上一页了，没了', 20000)
        }
        else {
            
            this.setState(() => { this.state.limit-- });
            this.setState({ content: [] });
            this.setState({ wait: true })
            fetch('https://cnodejs.org/api/v1/topics')
                .then(res => res.json())
                .then(res => {
                    this.setState({ data: [] });
                    this.setState({ a: res.data });
                    this.setState({ wait: false })
                    for (var i = this.state.limit * 10; i < this.state.limit * 10 + 10; i++) {
                        if (res.data[i].title.length >= 15 || res.data[i].create_at.length >= 15) {
                            this.setState(() => this.state.content.push({ title: res.data[i].title.substr(0, 15) + "...", time: res.data[i].create_at.substr(0, 9), reply: parseInt(Math.random() * 2) }))
                        }
                        else {
                            this.setState(() => this.state.content.push({ title: res.data[i].title, time: res.data[i].create_at.substr(0, 9), reply: parseInt(Math.random() * 2) }))
                        }

                    }
                })
        }
    }
    nex = () => {
        
        this.setState(() => { this.state.limit++ });
        this.setState({ content: [] });
         this.setState({ wait: true })
        fetch('https://cnodejs.org/api/v1/topics')
            .then(res => res.json())
            .then(res => {
                this.setState({ data: [] });
                this.setState({ a: res.data });
                this.setState({ wait: false })
                for (var i = this.state.limit * 10; i < this.state.limit * 10 + 10; i++) {
                    if (res.data[i].title.length >= 15 || res.data[i].create_at.length >= 15) {
                        this.setState(() => this.state.content.push({ title: res.data[i].title.substr(0, 15) + "...", time: res.data[i].create_at.substr(0, 9), reply: parseInt(Math.random() * 2) }))
                    }
                    else {
                        this.setState(() => this.state.content.push({ title: res.data[i].title, time: res.data[i].create_at.substr(0, 9), reply: parseInt(Math.random() * 2) }))
                    }

                }
                
            })
    }
    render() {

        const styles = StyleSheet.create({
            box: {
                backgroundColor: "#eeeeee",
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'center'
            },
            foot: {
                width: '100%',
                height: 80,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-around',
                backgroundColor: 'white'
            },
            footbtn: {
                justifyContent: 'center',
                alignItems: 'center',
                color: 'white',
                borderRadius: 15,
                backgroundColor: 'red',
                width: 120,
                height: 30,
            },
            content: {
                width: '100%',
                height: 45,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderBottomWidth: 1,
                borderBottomColor: '#eeeeee',
                backgroundColor: 'white',
                padding: 10
            },
            contentRight: {
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center'
            }
        })
        return (

            <View style={styles.box}>
                {
                    this.state.wait
                        ? <View style={{marginLeft:200}}><Text>请稍等...</Text></View>
                        : null
                }
                {this.state.content.map((item) => (
                    <View style={styles.content}>
                        <Text>{item.title}</Text>
                        <View style={styles.contentRight}>
                            <Text style={{ marginRight: 10 }}>
                                {item.time}
                            </Text>
                            {(item.reply == 1) ? (<Text>已回复</Text>) :
                                <Text style={{ color: 'red' }}>待回复</Text>
                            }
                        </View>
                    </View>
                ))}

                <View style={styles.foot}>
                    <Button
                        style={styles.footbtn}
                        onPress={this.previous}
                    >上一页</Button>
                    <Text>第{this.state.limit + 1}页</Text>
                    <Button
                        style={styles.footbtn}
                        onPress={this.nex}
                    >下一页</Button>
                </View>
            </View>
        )
    }
}
