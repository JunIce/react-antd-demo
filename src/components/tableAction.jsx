import React, {Component} from 'react'
import {Divider,Popconfirm, message} from 'antd'

export default class TableAction extends Component {
    render() {
        return (
            <span>
                <Popconfirm 
                    title='确认修改吗?'
                    onConfirm={this._confirm}
                    onCancel={this._cancel}
                    okText='确认'
                    cancelText='取消'
                >
                    <a href="##" >修改</a>
                </Popconfirm>
                <Divider type="vertical" />
                <Popconfirm
                    title="确认删除吗?"
                    onConfirm={this._confirm}
                    onCancel={this._cancel}
                >
                    <a href="##">删除</a>
                </Popconfirm>
            </span>
        )
    }

    _confirm =() => {
        message.success(`${this.props.info.id} 确认删除`)
    }

    _cancel = () => {
        message.error(`${this.props.info.id} 取消成功`)
    }
}