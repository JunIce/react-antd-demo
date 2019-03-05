import React, { Component } from "react"
import { Table, Drawer, Button, Form, Input, Switch, Radio } from "antd"
import axios from "axios"
import { base_url } from "../api"

export default class Banner extends Component {
  state = {
    banners: [],
    boxVisiable: false,
    index: 0,
    editInfo: {}
  }

  componentDidMount() {
    let _self = this
    axios.get(`${base_url}home/banner`).then(res => {
      _self.setState({
        banners: res.data.data
      })
    })
  }
  render() {
    let banner = this.state.editInfo || {}
    return (
      <div>
        <Table
          dataSource={this.state.banners}
          columns={initColumn(this._toggleDrawer)}
        />
        <Drawer
          title={"修改"}
          visible={this.state.boxVisiable}
          onClose={this._toggleDrawer}
          width={400}
        >
          <Form>
            <Form.Item label="标题">
              <Input value={banner.title} onChange={this._editInput} />
            </Form.Item>
            <Form.Item label="显示">
              <Switch checked={!!banner.status} onChange={this._editSwitch} />
            </Form.Item>
            <Form.Item label="类型">
              <Radio.Group value={banner.type} onChange={this._editRadio}>
                <Radio value={1}>原生</Radio>
                <Radio value={2}>H5</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item label="Banner图片">
              <img src={banner.banner} alt="" />
            </Form.Item>
            <div
              style={{
                padding: "20px",
                position: "absolute",
                bottom: 0,
                right: 0
              }}
            >
              <Button type="primary" onClick={this._editConfirm}>
                确定
              </Button>
            </div>
          </Form>
        </Drawer>
      </div>
    )
  }
  _editConfirm = () => {
    let editBanner = this.state.banners
    editBanner[this.state.index] = this.state.editInfo
    this.setState({
      banners: editBanner,
      boxVisiable: false
    })
  }
  _editRadio = e => {
    this.setState({
      editInfo: {
        ...this.state.editInfo,
        type: e.target.value
      }
    })
  }
  _editSwitch = checked => {
    this.setState({
      editInfo: {
        ...this.state.editInfo,
        status: checked
      }
    })
  }
  _editInput = e => {
    this.setState({
      editInfo: {
        ...this.state.editInfo,
        title: e.target.value
      }
    })
  }
  _toggleDrawer = index => {
    let edit = !this.state.boxVisiable ? this.state.banners[index] : {}
    console.log(edit)
    this.setState({
      boxVisiable: !this.state.boxVisiable,
      index: !this.state.boxVisiable ? index : 0,
      editInfo: edit
    })
  }
}

function initColumn(fn) {
  return [
    {
      title: "状态",
      key: "status",
      dataIndex: "status",
      render: text => (text ? "开启" : "关闭")
    },
    {
      title: "类型",
      key: "type",
      dataIndex: "type",
      render: text => (text === 1 ? "原生" : "H5")
    },
    {
      title: "标题",
      key: "title",
      dataIndex: "title"
    },
    {
      title: "Banner图",
      key: "banner",
      dataIndex: "banner",
      render: (text, record, index) => {
        return <img src={text} alt={record.title} />
      }
    },
    {
      title: "编辑",
      key: "edit",
      render: (text, record, index) => {
        return (
          <a href="##" onClick={fn.bind(this, index)}>
            编辑
          </a>
        )
      }
    }
  ]
}
