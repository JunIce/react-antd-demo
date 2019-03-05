import React, {Component} from 'react'
import {Divider} from 'antd'

export default class TableAction extends Component {
    render() {
        return (
            <span>
                <a href="javascript:;" onClick={this._editInfo}>修改</a>
                <Divider type="vertical" />
                <a href="javascript:;">删除</a>
            </span>
        )
    }

    _editInfo =() => {
        console.log(this.props.info)
        console.log(`edit: ${this.props.info.id}`)
    }

    _deleteInfo = () => {
        console.log(`delete: ${this.props.info.id}`)
    }
}