import React, { useEffect } from 'react';
import styles from './UserPage.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getUserBytoken, getUsers } from '../../features/authSlice';

const UserPage = () => {

    const dispatch = useDispatch()
    useEffect(() => {
        const token = localStorage.getItem('token');
    dispatch(getUserBytoken(token))
    dispatch(getUsers())
    }, [dispatch])
    const id = localStorage.getItem("userId")
    const user = useSelector((state) => state.authSlice.user.find(user => user._id === id));
    
    console.log(user);

    return (
<>
<div className={styles.userMain}>
    <div className={styles.userImg}>
        <h1>{user}</h1>
    </div>

</div>
</>
    );
};

export default UserPage;