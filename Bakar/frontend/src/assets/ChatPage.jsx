import { PrettyChatWindow,} from 'react-chat-engine-pretty';


const ChatsPage = (props) => {
    return( <div style= {{ height: '100vh'}}>
        <PrettyChatWindow
        projectId='c4d5c2f3-7618-4dd6-8217-b26859e550c8'
        username={props.user.username}
        secret={props.user.secret}
        style={{height : '100%'}}
        />
    </div>
    )
}

export default ChatsPage