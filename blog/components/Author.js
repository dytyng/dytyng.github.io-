
import {Avatar,Divider,Tooltip } from 'antd'
import '../statics/style/components/author.css'

const Author =()=>{

    return (
        <div className="author-div comm-box">
            <div> <Avatar size={100} src="https://github.com/dytyng/dytyng.github.io/blob/master/1%E5%9B%BE%E7%89%87.jpg" /></div>
            <div className="author-introduction">
                前端开发
                <Divider>github账号</Divider>
                <Tooltip title="https://github.com/dytyng">
                    <a href="https://github.com/dytyng" target="_blank">
                        <Avatar size={28} icon="github" className="account"  />
                    </a>
                </Tooltip>
            </div>
        </div>
    )
}

export default Author
