'use strict';

module.exports = [
    {
        method: 'post',
        endpoint: '/crud',
        fileField: null,
        fileObjArray: 'none',
        handlers: [
            // 'AuthInterface.authenticate',
            'CRUDUserInterface.insertUser'
        ]
    },
    {
        method: 'get',
        endpoint: '/crud',
        fileField: null,
        fileObjArray: 'none',
        handlers: [
            // 'AuthInterface.authenticate',
            'CRUDUserInterface.getListUser'
        ]
    },
    {
        method: 'get',
        endpoint: '/crud/one',
        fileField: null,
        fileObjArray: 'none',
        handlers: [
            // 'AuthInterface.authenticate',
            'CRUDUserInterface.getListOneUser'
        ]
    },
    {
        method: 'put',
        endpoint: '/crud',
        fileField: null,
        fileObjArray: 'none',
        handlers: [
            // 'AuthInterface.authenticate',
            'CRUDUserInterface.updateUser'
        ]
    },
    {
        method: 'delete',
        endpoint: '/crud',
        fileField: null,
        fileObjArray: 'none',
        handlers: [
            // 'AuthInterface.authenticate',
            'CRUDUserInterface.deleteUser'
        ]
    }
];
