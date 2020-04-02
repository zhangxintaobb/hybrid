import React, { useState, useEffect } from 'react';
import {
  StyleSheet, View, Text, Image,
  BackHandler, ToastAndroid, AsyncStorage
} from 'react-native';
import { Router, Overlay, Scene, Tabs, Drawer, Lightbox, Modal, Actions } from 'react-native-router-flux';
import SplashScreen from 'react-native-splash-screen';
import SwiperPage from './compontents/common/SwiperPage';
import Home from './compontents/home/Home';
import Release from './compontents/person/Release';
import MyList from './compontents/mylist/MyList';
import Person from './compontents/person/Person';
import Login from './compontents/common/Login';
import Icon from 'react-native-vector-icons/AntDesign';
import Register from './compontents/common/Register';
console.disableYellowBox = true;
const App = () => {
  let [isLogin, setLogin] = useState(false);
  let [isInstall, setInstall] = useState(true);
  let now = 0;
  let init = () => {
    AsyncStorage.getItem('isInstall')
      .then(res => {
        console.log('isinstall', res)
        if (res) {
          setInstall(false);
        }
      })
    AsyncStorage.getItem('user')
      .then(res => {
        let user = JSON.parse(res)
        console.log(user)
        if (!user) {
          SplashScreen.hide();
        }
        if (user && user.token) {
          setLogin(true);
          SplashScreen.hide();
        }
      })
  }
  useEffect(() => {
    init();
  }, [])
  let afterInstall = () => {
    console.log('after install')
    setInstall(false)
  }
  console.log(Actions.currentScene)
  if (isInstall) {
    
    return <View style={{ flex: 1 }}>
      <SwiperPage afterInstall={afterInstall} />
    </View>
  }
  return (
    <>
      <Router
        backAndroidHandler={()=>{	
					if(Actions.currentScene == 'login' || Actions.currentScene == null){
						if(new Date().getTime()-now<2000){
							BackHandler.exitApp();
						}else{
							ToastAndroid.show('确定要退出吗',100);
							now = new Date().getTime();
							return true;
						}
					}
					else if(Actions.currentScene != 'Home'){
						Actions.pop();
						return true;
					}
					else{
						if(new Date().getTime()-now<2000){
							BackHandler.exitApp();
						}else{
							ToastAndroid.show('确定要退出吗',100);
							now = new Date().getTime();
							return true;
						}
					}
				}}
      >
                <Scene key="root">
                  <Tabs
                    hideNavBar
                    key="tabbar"
                    showLabel={true}
                    tabBarStyle={{ backgroundColor: "#ffffff" }}
                    activeTintColor="#f23636"
                  >
                    <Scene
                      hideNavBar
                      key="Home"
                      component={Home}
                      title="首页"
                      icon={
                        ({ focused }) => <Icon
                          size={30}
                          color={focused ? '#f23636' : '#949494'}
                          name="home"
                        />
                      }
                    />
                    <Scene
                      hideNavBar
                      key="Mylist"
                      component={MyList}
                      title="商品分类"
                      icon={
                        ({ focused }) => <Icon
                          size={30}
                          color={focused ? '#f23636' : '#949494'}
                          name="appstore-o"
                        />
                      }
                    />
                    <Scene
                      hideNavBar
                      key="Person"
                      component={Person}
                      icon={
                        ({ focused }) => <Icon
                          size={30}
                          color={focused ? '#f23636' : '#949494'}
                          name="user"
                        />
                      }
                      title="个人中心"
                    >
                    </Scene>
                  </Tabs>
            <Scene initial={!isLogin} hideNavBar key="login" component={Login} />
            <Scene key="register" hideNavBar component={Register} />
            <Scene key="release" component={Release} />
                </Scene>
      </Router>
    </>
  )
};

const styles = StyleSheet.create({

});

export default App;
