"use client"; 

import { createContext, useState } from "react";

export const UserCourseListContext = createContext(null);

export function UserCourseListProvider({ children }) {
  const [userCourseList, setUserCourseList] = useState([]);

  return (
    <UserCourseListContext.Provider value={{ userCourseList, setUserCourseList }}>
      {children}
    </UserCourseListContext.Provider>
  );
}
