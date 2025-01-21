import { RoutesName } from "../constants/RoutesName";
import LoginScreen from "../screens/auth/LoginScreen";
import RegisterScreen from "../screens/auth/RegisterScreen";
import SplashScreen from "../screens/auth/SplashScreen";
import FollowingScreen from "../screens/dashboard/FollowingScreen";
import HomeScreen from "../screens/dashboard/HomeScreen";
import ProfileScreen from "../screens/dashboard/ProfileScreen";
import RedeemScreen from "../screens/dashboard/RedeemScreen";
import UserProfileScreen from "../screens/dashboard/UserProfileScreen";
import FeedReelScrollScreen from "../screens/reel/FeedReelScrollScreen";
import PickReelScreen from "../screens/reel/PickReelScreen";
import ReelScrollScreen from "../screens/reel/ReelScrollScreen";
import UploadReelScreen from "../screens/reel/UploadReelScreen";
import BottomTab from "./BottomTab";


export const authStack = [
    {
        name: RoutesName.Login,
        component: LoginScreen,
    },
    {
        name: RoutesName.Register,
        component: RegisterScreen,
    },
    {
        name: RoutesName.Splash,
        component: SplashScreen,
    },
];

export const dashboardStack = [
    {
        name: RoutesName.BottomTab,
        component: BottomTab,
    },
    {
        name: RoutesName.Following,
        component: FollowingScreen,
    },
    // {
    //     name: RoutesName.Home,
    //     component: HomeScreen,
    // },
    // {
    //     name: RoutesName.Profile,
    //     component: ProfileScreen,
    // },
    {
        name: RoutesName.Redeem,
        component: RedeemScreen,
    },
    {
        name: RoutesName.UserProfile,
        component: UserProfileScreen,
    },
];

export const reelStack = [
    {
        name: RoutesName.FeedReelScroll,
        component: FeedReelScrollScreen,
    },
    {
        name: RoutesName.PickReel,
        component: PickReelScreen,
    },
    {
        name: RoutesName.ReelScroll,
        component: ReelScrollScreen,
    },
    {
        name: RoutesName.UploadReel,
        component: UploadReelScreen,
    },
];

export const mergedStack = [...authStack, ...dashboardStack, ...reelStack];