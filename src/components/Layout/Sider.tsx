import React from "react";
import { useRouter } from "next/router";
import { Menu, Layout } from "antd";
import { PAGES } from "@/data";
import { ISider } from "./type";

const Sider: React.FC<ISider> = (props) => {
  const router = useRouter();
  // const { is_collapsed } = props;
  // const sliderItems = [
  //   {
  //     label: "ashboard",
  //     key: "/pds/abc-board",
  //     title: "xxx",
  //   },
  // ];

  const handleMenuItemClick = ({ key }: { key: number }) => {
    const path = Object.values(PAGES).find((page) => page.id === Number(key))?.path;

    if (path) {
      router.push(path);
    }
  };

  const items = Object.values(PAGES).map((page) => ({
    key: page.id,
    label: page.label,
  }));

  return (
    <Layout.Sider
      // className="shadow overflow-auto z-10 h-[100vh]"
      trigger={null}
      collapsible // 是否可收起
      theme="light"
      className="shadow transition-all duration-500"
      // collapsed={collapsedState}
      // collapsed={is_collapsed}
      collapsedWidth={0}
      // onClick={stop_propagation}
    >
      {/* <div className="pl-8 pt-5 pb-3 w-full flex">
        <img src={SATLogo} className="w-full max-w-[150px]" alt="logo" />
      </div> */}

      <div className="flex flex-col">
        <Menu
          // mode="inline"
          className="flex flex-1 flex-col"
          // selectedKeys={[location.pathname]}
          items={items}
          onClick={handleMenuItemClick}
        />
      </div>
    </Layout.Sider>
  );
};

export default Sider;
