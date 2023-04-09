import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from '../features/usersSlice'

export const Users = () => {

    const dispatch = useDispatch()

    const users = useSelector((state) => state.users.users)

    useEffect(() => {
        dispatch(fetchUsers())
    }, [dispatch])
    return (
        <div>
            {users.map((user) => {
                return <div>{user.login}</div>
            })}
        </div>
    )
}

export default Users
