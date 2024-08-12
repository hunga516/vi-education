import DefautLayout from "../Layout/DefaultLayout";
import AccountPage from "../pages/AccountPage";
import FollowingPage from "../pages/FollowingPage";
import HomePage from "../pages/HomePage";

export const publicRoute = [
    { path: '/', element: HomePage, layout: DefautLayout },
    { path: '/following', element: FollowingPage },
    { path: '/account', element: AccountPage },
]