import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {Icon} from 'native-base';
import * as React from 'react';
import {Settings, StatusBar} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ApplicationConstant} from '../config/constants';
import Account from '../screens/Account';
import BlockedUsers from '../screens/BlockedUsers';
import ChangePassword from '../screens/ChangePassword';
import Chat from '../screens/Chat';
import CreatePost from '../screens/CreatePost';
import DeletedPosts from '../screens/DeletedPosts';
import EditPost from '../screens/EditPost';
import ForgotPassword from '../screens/ForgotPassword';
import Home from '../screens/Home/Home';
import Login from '../screens/Login/Login';
import ManageNotifications from '../screens/ManageNotifications';
import Messages from '../screens/Messages';
import MyPosts from '../screens/MyPosts';
import Notification from '../screens/Notifications';
import Onboarding from '../screens/Onboarding';
import PostCategories from '../screens/PostCategories';
import PostDetail from '../screens/PostDetail';
import Privacy from '../screens/Privacy';
import Register from '../screens/Register';
import ReportedPosts from '../screens/ReportedPosts';
import {useAuth} from '../services/hooks/account/useAuth';
import {navigationRef} from './NavigationService';
import {
  getFocusedRouteNameFromRoute,
  NavigationContainer,
} from '@react-navigation/native';

const Stack = createStackNavigator();
const AuthStack = createStackNavigator();
const Tab = createBottomTabNavigator();

interface IProps {}

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{}}
      />
      <Stack.Screen
        name="Onboarding"
        component={Onboarding}
        options={{
          headerShown: true,
        }}
      />
    </AuthStack.Navigator>
  );
};

const AccountStack = createStackNavigator();

function AccountStackScreen() {
  return (
    <AccountStack.Navigator>
      <AccountStack.Screen
        name="Profile"
        options={{headerShown: false}}
        component={Account}
      />
      <AccountStack.Screen
        name="Settings"
        options={{
          headerShown: true,
          headerTitle: 'IMPOSTAZIONI',
          headerBackTitleVisible: false,
        }}
        component={Settings}
      />
      <AccountStack.Screen
        name="ChangePassword"
        options={{
          headerShown: true,
          headerTitle: 'CAMBIO PASSWORD',
          headerBackTitleVisible: false,
        }}
        component={ChangePassword}
      />
      <AccountStack.Screen
        name="Privacy"
        options={{
          headerShown: true,
          headerTitle: 'PRIVACY',
          headerBackTitleVisible: false,
        }}
        component={Privacy}
      />
      <Stack.Screen
        name="Onboarding"
        component={Onboarding}
        options={{
          headerShown: true,

          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name="CategoriesPost"
        component={PostCategories}
        options={{
          headerShown: true,

          headerTitle: 'Categorie di Post',
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name="BlockedUsers"
        component={BlockedUsers}
        options={{
          headerShown: true,
          headerTitle: '',

          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name="DeletedPosts"
        component={DeletedPosts}
        options={{
          headerShown: true,
          headerTitle: '',

          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name="ReportedPosts"
        component={ReportedPosts}
        options={{
          headerShown: true,
          headerTitle: '',

          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name="MyPosts"
        component={MyPosts}
        options={{
          headerShown: true,
          headerTitle: '',
          headerBackTitleVisible: false,
        }}
      />
      <AccountStack.Screen
        name="ManageNotifications"
        options={{
          headerShown: true,
          headerTitle: 'NOTIFICHE',
          headerBackTitleVisible: false,
        }}
        component={ManageNotifications}
      />
    </AccountStack.Navigator>
  );
}

const MessageStack = createStackNavigator();

function MessageStackScreen() {
  return (
    <MessageStack.Navigator>
      <MessageStack.Screen
        name="Conversations"
        options={{headerShown: false}}
        component={Messages}
      />
      <MessageStack.Screen
        name="Chat"
        options={{
          headerShown: true,
          headerBackTitleVisible: false,
        }}
        component={Chat}
      />
    </MessageStack.Navigator>
  );
}

const PostStack = createStackNavigator();

function PostStackScreen() {
  return (
    <PostStack.Navigator>
      <PostStack.Screen
        name="Posts"
        options={{headerShown: false}}
        component={Home}
      />
      <PostStack.Screen
        name="PostDetail"
        options={{
          headerShown: true,
          headerTitle: 'Dettaglio post',
          headerBackTitleVisible: false,
        }}
        component={PostDetail}
      />
      <PostStack.Screen
        name="EditPost"
        options={{
          headerShown: true,
          headerTitle: 'Modifica post',
          headerBackTitleVisible: false,
        }}
        component={EditPost}
      />
    </PostStack.Navigator>
  );
}

const LoggedInNavigator = () => {
  const {bottom} = useSafeAreaInsets();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarStyle: {
          height: 80 + bottom,
          backgroundColor: '#2e7d3d',
        },

        tabBarLabelStyle: {
          fontFamily: 'Roboto-Light',
          fontSize: 14,
          paddingBottom: 10,
          paddingTop: 0,
          color: 'white',
        },
        tabBarItemStyle: {
          borderRadius: 20,
          margin: 5,
        },
        tabBarInactiveTintColor: 'transparent',
        tabBarShowLabel: true,
        headerShown: false,
        tabBarInactiveBackgroundColor: 'transparent',
        tabBarActiveBackgroundColor: '#82AC7E',
      }}>
      <Tab.Screen
        name="Notifications"
        component={Notification}
        options={{
          tabBarLabel: 'Notifiche',
          title: 'Notifiche',
          tabBarStyle: {
            height: 70 + bottom,
            backgroundColor: '#2e7d3d',
          },
          tabBarIcon: () => <Icon name="bell" color={'white'} size={25} />,
        }}
      />
      <Tab.Screen
        name="Pubblica"
        component={CreatePost}
        options={{
          tabBarLabel: 'Pubblica',
          tabBarStyle: {
            height: 70 + bottom,
            backgroundColor: '#2e7d3d',
          },
          tabBarIcon: () => (
            <Icon name="plus-circle" color={'white'} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={PostStackScreen}
        options={({route}) => ({
          tabBarStyle: (routeHome => {
            const routeName = getFocusedRouteNameFromRoute(routeHome) ?? '';
            console.log(routeName);
            if (routeName === 'PostDetail') {
              return {
                display: 'none',
              };
            }
            return {height: 70 + bottom, backgroundColor: '#2e7d3d'};
          })(route),
          tabBarLabel: 'Home',
          tabBarIcon: () => <Icon name="home" color={'white'} size={25} />,
        })}
      />
      <Tab.Screen
        name="Messages"
        component={MessageStackScreen}
        options={({route}) => ({
          tabBarStyle: (routeChat => {
            const routeName = getFocusedRouteNameFromRoute(routeChat) ?? '';
            console.log(routeName);
            if (routeName === 'Chat') {
              return {
                display: 'none',
              };
            }
            return {height: 70 + bottom, backgroundColor: '#2e7d3d'};
          })(route),
          tabBarLabel: 'Messaggi',
          tabBarIcon: () => <Icon name="email" color={'white'} size={25} />,
        })}
      />
      <Tab.Screen
        name="Account"
        component={AccountStackScreen}
        options={{
          tabBarLabel: 'Account',
          tabBarStyle: {
            height: 70 + bottom,
            backgroundColor: '#2e7d3d',
          },
          tabBarIcon: () => <Icon name="account" color={'white'} size={25} />,
        }}
      />
    </Tab.Navigator>
  );
};
const config = {
  screens: {
    HomeStack: {
      initialRouteName: 'Home',
      screens: {
        Home: 'home',
        Messages: {
          screens: {
            Chat: 'chat/:conversationId',
          },
        },
      },
    },
  },
};

const linking = {
  prefixes: [ApplicationConstant.deepLinkPrefix],
  config,
};
const Navigator: React.FC<IProps> = () => {
  const {user} = useAuth();

  return (
    <NavigationContainer ref={navigationRef} linking={linking}>
      <StatusBar hidden barStyle={'light-content'} />

      <Stack.Navigator screenOptions={{headerShown: false}}>
        {user ? (
          <Stack.Screen name="HomeStack" component={LoggedInNavigator} />
        ) : (
          <Stack.Screen
            name="LoginStack"
            component={AuthNavigator}
            options={{
              animationTypeForReplace: user ? 'push' : 'pop',
            }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
