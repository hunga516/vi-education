import DefautLayout from "../layouts/DefaultLayout";
import NoneLayout from "../layouts/NoneLayout";
import AccountPage from "../pages/AccountPage";
import ForumsPage from "../pages/ForumsPage";
import ReelsPage from "../pages/ReelsPage";
import ProfilePage from "../pages/ProfilePage";
import PopupLogin from "../pages/PopupLogin";

export const publicRoute = [
    { path: '/reels', element: ReelsPage, layout: DefautLayout },
    { path: '/sign-in', element: PopupLogin, layout: NoneLayout },
    { path: '/forums', element: ForumsPage },
    { path: '/account', element: AccountPage },
    { path: '/:nickname', element: ProfilePage },
]