import React, { useState, useCallback, ReactNode } from "react";
import { Layout } from "antd";
import Sider from "./Sider";
import Header from "./Header";

const { Content } = Layout;

interface ILayout {
  children: ReactNode;
}

const MyLayout = ({ children }: ILayout) => {
  const [is_collapsed, set_is_collapsed] = useState(true);

  const toggleCollapsed = useCallback((e: React.MouseEvent<HTMLDivElement>): void => {
    set_is_collapsed((prev: boolean) => !prev);
    e.stopPropagation();
  }, []);

  const handleClick = (): void => {
    set_is_collapsed(true);
  };

  // 點擊畫面其他地方時關閉 navbar
  // useEffect(() => {
  //   if (!is_collapsed) {
  //     window.addEventListener("click", handleClick);
  //   } else {
  //     window.removeEventListener("click", handleClick);
  //   }
  //   return () => {
  //     window.removeEventListener("click", handleClick);
  //   };
  // }, [is_collapsed]);

  return (
    <Layout className="h-screen w-screen">
      <Sider is_collapsed={is_collapsed} toggleCollapsed={toggleCollapsed} />
      <Layout>
        <Header is_collapsed={is_collapsed} toggleCollapsed={toggleCollapsed} />
        <Content className="p-2">
          {/* <Kanban />
           */}
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default MyLayout;
