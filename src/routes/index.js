import DefautLayout from "../layouts/DefaultLayout";
import NoneLayout from "../layouts/NoneLayout";
import ForumsPage from "../pages/ForumsPage";
import ReelsPage from "../pages/ReelsPage";
import ProfilePage from "../pages/ProfilePage";
import PopupLogin from "../pages/PopupLogin";
import HomePage from "../pages/HomePage";
import AdminHomePage from "../pages/AdminPage/AdminHomePage";
import DetailsCoursePage from "../pages/DetailsCoursePage";
import OnSideLayout from "../layouts/OneSideLayout";
import LandingPage from "../pages/LandingPage";

export const publicRoute = [
    { path: '/', element: HomePage, layout: DefautLayout }, //đã có defaultlayout lúc duyệt ra, có thể xoá layout ở đây nếu là default
    { path: '/home', element: HomePage, layout: DefautLayout },
    { path: '/reels', element: ReelsPage, layout: DefautLayout },
    { path: '/sign-in', element: PopupLogin, layout: NoneLayout },
    { path: '/forums', element: ForumsPage },
    { path: '/admin/courses', element: AdminHomePage },
    { path: '/courses/:id', element: DetailsCoursePage, layout: OnSideLayout },
    { path: '/landing', element: LandingPage, layout: NoneLayout },
    { path: '/:nickname', element: ProfilePage },
]