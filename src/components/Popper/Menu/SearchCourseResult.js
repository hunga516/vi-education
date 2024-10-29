import Tippy from "@tippyjs/react";
import Wrapper from "../Wrapper";
import MenuItem from "./MenuItem";

function SearchCourseResult({ children, searchedCourses, handleClickCourse }) {

    return (
        <Tippy
            trigger='click'
            target
            placement='bottom-start'
            interactive={true}
            render={attrs => (
                <>
                    {searchedCourses?.length > 0 && (
                        <Wrapper>
                            <ul className="content">
                                {searchedCourses.map((course, index) => {
                                    course.title = course.title
                                    course.icon = course.images
                                    return <MenuItem key={index} data={course} onClick={(e) => handleClickCourse(e, course)} />
                                })}
                            </ul>
                        </Wrapper>
                    )}
                </>
            )}
        >
            {children}
        </Tippy >
    )
}

export default SearchCourseResult;
