'use strict';

module.exports = [
    {
        method: 'post',
        endpoint: '/crud',
        fileField: null,
        fileObjArray: 'none',
        handlers: [
            // 'AuthInterface.authenticate',
            'CRUDVehicleInterface.insertVehicle'
        ]
    },
    {
        method: 'get',
        endpoint: '/crud',
        fileField: null,
        fileObjArray: 'none',
        handlers: [
            // 'AuthInterface.authenticate',
            'CRUDVehicleInterface.getListVehicle'
        ]
    },
    {
        method: 'get',
        endpoint: '/crud/one',
        fileField: null,
        fileObjArray: 'none',
        handlers: [
            // 'AuthInterface.authenticate',
            'CRUDVehicleInterface.getListOneVehicle'
        ]
    },
    {
        method: 'put',
        endpoint: '/crud',
        fileField: null,
        fileObjArray: 'none',
        handlers: [
            // 'AuthInterface.authenticate',
            'CRUDVehicleInterface.updateVehicle'
        ]
    },
    {
        method: 'delete',
        endpoint: '/crud',
        fileField: null,
        fileObjArray: 'none',
        handlers: [
            // 'AuthInterface.authenticate',
            'CRUDVehicleInterface.deleteVehicle'
        ]
    }
];
