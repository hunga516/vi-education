import DefautLayout from "../layouts/DefaultLayout";
import NoneLayout from "../layouts/NoneLayout";
import ForumsPage from "../pages/ForumsPage";
import ReelsPage from "../pages/ReelsPage";
import ProfilePage from "../pages/ProfilePage";
import PopupLogin from "../pages/PopupLogin";
import HomePage from "../pages/HomePage";
import DetailsCoursePage from "../pages/DetailsCoursePage";
import OnSideLayout from "../layouts/OneSideLayout";
import LandingPage from "../pages/LandingPage";
import AdminChapterPage from "../pages/AdminPage/AdminLessonPage";
import AdminCoursePage from "../pages/AdminPage/AdminCoursePage";
import AdminHomePage from "../pages/AdminPage/AdminUserPage";
import AdminLayout from "../layouts/AdminLayout";
import AdminUserPage from "../pages/AdminPage/AdminUserPage";
import Host from "../pages/Host";
import Client from "../pages/Client";

export const publicRoute = [
    { path: '/', element: HomePage, layout: DefautLayout }, //đã có defaultlayout lúc duyệt ra, có thể xoá layout ở đây nếu là default
    { path: '/home', element: HomePage, layout: DefautLayout },
    { path: '/host', element: Host, layout: DefautLayout },
    { path: '/client', element: Client, layout: DefautLayout },
    { path: '/reels', element: ReelsPage, layout: DefautLayout },
    { path: '/sign-in', element: PopupLogin, layout: NoneLayout },
    { path: '/forums', element: ForumsPage },
    { path: '/admin', element: AdminHomePage, layout: AdminLayout },
    { path: '/admin/courses', element: AdminCoursePage, layout: AdminLayout },
    { path: '/admin/lessons', element: AdminChapterPage, layout: AdminLayout },
    { path: '/admin/users', element: AdminUserPage, layout: AdminLayout },
    { path: '/courses/:id', element: DetailsCoursePage, layout: OnSideLayout },
    { path: '/landing', element: LandingPage, layout: NoneLayout },
    { path: '/:nickname', element: ProfilePage },
]