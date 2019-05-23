'use strict';

module.exports = [
    {
        method: 'post',
        endpoint: '/crud',
        fileField: null,
        fileObjArray: 'none',
        handlers: [
            'AuthInterface.tokenAuthenticated',
            'CRUDUserInterface.insertUser'
        ]
    },
    {
        method: 'get',
        endpoint: '/crud',
        fileField: null,
        fileObjArray: 'none',
        handlers: [
            'AuthInterface.tokenAuthenticated',
            'CRUDUserInterface.getListUser'
        ]
    },
    {
        method: 'get',
        endpoint: '/crud/one',
        fileField: null,
        fileObjArray: 'none',
        handlers: [
            'AuthInterface.tokenAuthenticated',
            'CRUDUserInterface.getListOneUser'
        ]
    },
    {
        method: 'put',
        endpoint: '/crud',
        fileField: null,
        fileObjArray: 'none',
        handlers: [
            'AuthInterface.tokenAuthenticated',
            'CRUDUserInterface.updateUser'
        ]
    },
    {
        method: 'delete',
        endpoint: '/crud',
        fileField: null,
        fileObjArray: 'none',
        handlers: [
            'AuthInterface.tokenAuthenticated',
            'CRUDUserInterface.deleteUser'
        ]
    }
];
