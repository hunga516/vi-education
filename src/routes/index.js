import DefautLayout from "../layouts/DefaultLayout";
import NoneLayout from "../layouts/NoneLayout";
import ForumsPage from "../pages/ForumsPage";
import ReelsPage from "../pages/ReelsPage";
import ProfilePage from "../pages/ProfilePage";
import PopupLogin from "../pages/PopupLogin";
import HomePage from "../pages/HomePage";

export const publicRoute = [
    { path: '/', element: HomePage, layout: DefautLayout },
    { path: '/home', element: HomePage, layout: DefautLayout },
    { path: '/reels', element: ReelsPage, layout: DefautLayout },
    { path: '/sign-in', element: PopupLogin, layout: NoneLayout },
    { path: '/forums', element: ForumsPage },
    { path: '/:nickname', element: ProfilePage },
]