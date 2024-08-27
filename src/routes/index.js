import DefautLayout from "../layouts/DefaultLayout";
import NoneLayout from "../layouts/NoneLayout";
import AccountPage from "../pages/AccountPage";
import FollowingPage from "../pages/FollowingPage";
import HomePage from "../pages/HomePage";
import ProfilePage from "../pages/ProfilePage";
import PopupLogin from "../pages/PopupLogin";

export const publicRoute = [
    { path: '/', element: HomePage, layout: DefautLayout },
    { path: '/sign-in', element: PopupLogin, layout: NoneLayout },
    { path: '/following', element: FollowingPage },
    { path: '/account', element: AccountPage },
    { path: '/:nickname', element: ProfilePage },
]