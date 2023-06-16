import React from "react";
import dayjs from "dayjs";
import { DatePicker, Space, Typography, Col, Row, Form, Input, Collapse, Select, Button } from "antd";

const { RangePicker } = DatePicker;
const { Title } = Typography;
const { Panel } = Collapse;

const dateFormat = "YYYY/MM/DD";

const Filter = () => {
  return (
    <Collapse defaultActiveKey={1}>
      <Panel header="" key="1">
        {" "}
        {/* // <Space direction="horizontal" size={24}> */}
        {/* <Title level={5}>Register Time</Title> */}
        {/* <RangePicker showTime defaultValue={[dayjs(), dayjs().add(1, "month")]} format={dateFormat} /> */}
        <Form
          // form={form}
          layout="vertical"
          size="middle"
          // onFinish={() => onSearch({})}
          // initialValues={{
          //   currencyIds: currencyListBySite?.map(({ currencyId }) => currencyId),
          //   statuses: [],
          // }}
        >
          <Row align="middle" gutter={16}>
            <Col lg={12} md={24} xs={24}>
              <Form.Item label="Register Time">
                <Input.Group compact style={{ width: "100%", display: "flex" }}>
                  <Form.Item name="dateRange" initialValue={dayjs()}>
                    <RangePicker
                      style={{ width: "100%" }}
                      // ranges={MOMENT_RANGE_PICKER_RANGES(["Today", "Last 7 Day", "This Month"])}
                      showTime
                    />
                  </Form.Item>
                </Input.Group>
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col lg={6} md={12} xs={12}>
              <Form.Item name="username" label="Username">
                <Input allowClear placeholder="Username" />
              </Form.Item>
            </Col>
            <Col lg={6} md={12} xs={12}>
              <Form.Item name="email" label="Email">
                <Input allowClear placeholder="Email" />
              </Form.Item>
            </Col>
          </Row>
          {/* </Space>
           */}
        </Form>
      </Panel>
    </Collapse>
  );
};

export default Filter;
