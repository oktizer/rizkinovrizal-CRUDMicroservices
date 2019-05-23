'use strict';

module.exports = [
    {
        method: 'post',
        endpoint: '/crud',
        fileField: null,
        fileObjArray: 'none',
        handlers: [
            'AuthInterface.tokenAuthenticated',
            'CRUDVehicleInterface.insertVehicle'
        ]
    },
    {
        method: 'get',
        endpoint: '/crud',
        fileField: null,
        fileObjArray: 'none',
        handlers: [
            'AuthInterface.tokenAuthenticated',
            'CRUDVehicleInterface.getListVehicle'
        ]
    },
    {
        method: 'get',
        endpoint: '/crud/one',
        fileField: null,
        fileObjArray: 'none',
        handlers: [
            'AuthInterface.tokenAuthenticated',
            'CRUDVehicleInterface.getListOneVehicle'
        ]
    },
    {
        method: 'put',
        endpoint: '/crud',
        fileField: null,
        fileObjArray: 'none',
        handlers: [
            'AuthInterface.tokenAuthenticated',
            'CRUDVehicleInterface.updateVehicle'
        ]
    },
    {
        method: 'delete',
        endpoint: '/crud',
        fileField: null,
        fileObjArray: 'none',
        handlers: [
            'AuthInterface.tokenAuthenticated',
            'CRUDVehicleInterface.deleteVehicle'
        ]
    }
];
