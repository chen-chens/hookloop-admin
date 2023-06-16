import React from "react";
import { Typography } from "antd";
import Layout from "@/components/Layout";
import { PAGES } from "@/data";
import MemberContent from "@/features/member";

const { Title } = Typography;

const Member = () => {
  const memberData = PAGES.member;
  const { label } = memberData;

  return (
    <Layout>
      <Title level={4}>{label}</Title>
      <MemberContent />
    </Layout>
  );
};

export default Member;
