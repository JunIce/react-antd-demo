import React, {Component} from 'react'
import {Table} from 'antd'
import TableAction from '../components/tableAction'
import axios from 'axios'

export default class Home extends Component {
    state = {
        data: [],
        loading: false,
        pagination:{}
    }

    componentDidMount() {
        this._fetch()
    }

    _fetch = () => {
        this.setState({loading: true})
        let self = this
        axios.get(' https://www.easy-mock.com/mock/5c7defb9c05ec81060cf541d/home/index')
        .then(res => {
            const pagination = {...this.state.pagination}
            pagination.total = 200

            self.setState({
                data: res.data.data,
                loading: false,
                pagination
            })
        })
    }

    render() {
        return (
            <div style={style}>
                <Table 
                    loading={this.state.loading}
                    dataSource={this.state.data} 
                    columns={columns}
                    pagination={this.state.pagination}
                    onChange={this._handleTableChange}
                />
            </div>
        )
    }

    _handleTableChange = (pagination) => {
        let page = {...this.state.pagination}
        page.current = pagination.current
        this.setState({
            pagination: page
        })
        this._fetch()
    }
}

const columns = [{
    title: '用户名',
    dataIndex: 'username',
    key: 'username',
}, {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
}, {
    title: '申请时间',
    dataIndex: 'create_at',
    key: 'create_at',
},
{
    title: '原因',
    dataIndex: 'reason',
    key: 'reason',
},
{
    title: '其他',
    dataIndex: 'other',
    key: 'other',
},
{
    title: '操作',
    key: 'actions',
    dataIndex: 'actions',
    render: (z,c) => {
        return <TableAction info={c} />
    }
}
];

const style = {
    padding: '20px'
}