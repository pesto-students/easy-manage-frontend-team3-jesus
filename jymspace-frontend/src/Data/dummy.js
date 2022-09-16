import React from 'react';
import { HiOutlineHome, HiOutlineUsers } from 'react-icons/hi';
import { FaUsers } from 'react-icons/fa';
import { IoStatsChartSharp } from 'react-icons/io5';

export const menuItems = [
    {
        id: 1,
        title: "Home",
        name: "",
        icon: <HiOutlineHome className='icon' />,
    },
    {
        id: 2,
        title: "Register",
        name: "register",
        icon: <FaUsers className='icon' />,
    },
    {
        id: 3,
        title: "Users",
        name: "RegisterTable",
        icon: <HiOutlineUsers className='icon' />,
    },
   
   
    {
        id:4,
        title: "Chart",
        name: "Chart",
        icon: <IoStatsChartSharp className='icon' />,
    },
]

export const UsersColumns = [
    {
      field: 'id',
      headerName: 'ID',
      width: 90, headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'Name',
      headerName: 'First name',
      width: 178,
      editable: true,
      headerAlign: 'center',
      align: 'center',
  
    },
    {
      field: 'gender',
      headerName: 'Gender',
      width: 178,
      editable: true,
      headerAlign: 'center',
      align: 'center',
  
    },
    {
      field: 'email',
      headerName: 'Email',
      type: 'number',
      width: 110,
      editable: true,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'password',
      headerName: 'Password',
      width: 178,
      editable: true,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'address',
      headerName: 'Address',
      width: 178,
      editable: true,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'city',
      headerName: 'City',
      width: 178,
      editable: true,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'state',
      headerName: 'State',
      width: 178,
      editable: true,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'country',
      headerName: 'country',
      width: 178,
      editable: true,
      headerAlign: 'center',
      align: 'center',
    }
  ];

export const UsersRows = [

    { id: 1, name: 'Snow', gender: 'Jon', email: 35, password: 'Active', address: 103, location: 'USA' },
    { id: 2, name: 'Lannister', gender: 'Cersei', email: 42, password: 'Completed', address: 104, location: 'India' },
    { id: 3, name: 'Lannister', gender: 'Jaime', email: 45, password: 'Pending', address: 105, location: 'India' },
    { id: 4, name: 'Stark', gender: 'Arya', email: 16, password: 'Active', address: 106, location: 'USA' },
    { id: 5, name: 'Targaryen', gender: 'Daenerys', email: 24, password: 'Completed', address: 107, location: 'France' },
    { id: 6, name: 'Melisandre', gender: 'Ryan', email: 178, password: 'Pending', address: 108, location: 'USA' },
    { id: 7, name: 'Clifford', gender: 'Ferrara', email: 44, password: 'Completed', address: 109, location: 'Canada' },
    { id: 8, name: 'Frances', gender: 'Rossini', email: 36, password: 'Active', address: 110, location: 'Uk' },
    { id: 9, name: 'Roxie', gender: 'Harvey', email: 65, password: 'Completed', address: 112, location: 'Australia' },
    { id: 10, name: 'Snow', gender: 'Jon', email: 35, password: 'Active', address: 113, location: 'USA' },
    { id: 11, name: 'Lannister', gender: 'Cersei', email: 42, password: 'Completed', address: 114, location: 'India' },
    { id: 12, name: 'Lannister', gender: 'Jaime', email: 45, password: 'Pending', address: 115, location: 'India' },
    { id: 13, name: 'Stark', gender: 'Arya', email: 16, password: 'Active', address: 116, location: 'USA' },
    { id: 14, name: 'Targaryen', gender: 'Daenerys', email: 24, password: 'Completed', address: 117, location: 'France' },
    { id: 15, name: 'Melisandre', gender: 'Ryan', email: 178, password: 'Pending', address: 118, location: 'USA' },
    { id: 16, name: 'Clifford', gender: 'Ferrara', email: 44, password: 'Completed', address: 119, location: 'Canada' },
    { id: 17, name: 'Frances', gender: 'Rossini', email: 36, password: 'Active', address: 120, location: 'Uk' },
    { id: 18, name: 'Roxie', gender: 'Harvey', email: 65, password: 'Completed', address: 122, location: 'Australia' },
    { id: 19, name: 'Snow', gender: 'Jon', email: 35, password: 'Active', address: 123, location: 'USA' },
    { id: 20, name: 'Lannister', gender: 'Cersei', email: 42, password: 'Completed', address: 124, location: 'India' },
    { id: 21, name: 'Lannister', gender: 'Jaime', email: 45, password: 'Pending', address: 125, location: 'India' },
    { id: 22, name: 'Stark', gender: 'Arya', email: 16, password: 'Active', address: 126, location: 'USA' },
    { id: 23, name: 'Targaryen', gender: 'Daenerys', email: 24, password: 'Completed', address: 127, location: 'France' },
    { id: 24, name: 'Melisandre', gender: 'Ryan', email: 178, password: 'Pending', address: 128, location: 'USA' },
    { id: 25, name: 'Clifford', gender: 'Ferrara', email: 44, password: 'Completed', address: 129, location: 'Canada' },
    { id: 26, name: 'Frances', gender: 'Rossini', email: 36, password: 'Active', address: 130, location: 'Uk' },
    { id: 27, name: 'Roxie', gender: 'Harvey', email: 65, password: 'Completed', address: 132, location: 'Australia' },
  ];
