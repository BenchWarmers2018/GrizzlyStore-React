import {Icon, notification} from "antd";
import React from "react";

export const successNotification = (message) =>
{
    return(
        notification.success({
            message: message,
            icon: <Icon type="smile" style={{ color: '#108ee9' }} />,
            style: {
            },
        })
    );
}

export const errorNotification = (message, desc) =>
{
    return(
        notification.error({
            message: message,
            description: desc,
            icon: <Icon type="frown" style={{ color: '#FF4957' }} />,
            style: {
            },
        })
    );
}

