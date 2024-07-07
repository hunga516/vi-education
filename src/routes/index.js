import OnlyHeaderLayout from "../components/Layout/OnlyHeaderLayout";
import Following from "../pages/Following";
import Home from "../pages/Home";
import Profile from "../pages/Profile";

export const publicRoute = [
    { path: '/', element: Home },
    { path: '/following', element: Following },
    { path: '/profile', element: Profile, layout: OnlyHeaderLayout },
]