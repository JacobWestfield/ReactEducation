import React from "react";
import list from '../components/ChatList/Chatlist.json';
import { List, ListItem, ListItemText } from '@material-ui/core';


//чаты на боковой панели

export const Sidebar = () => {
    return <List>{list.map(item => (
        <ListItem sx={{ height: '200px' }}>
            <ListItemText primary={item.chat} secondary={item.text}>
            </ListItemText>
        </ListItem>
    ))}
    </List>
}