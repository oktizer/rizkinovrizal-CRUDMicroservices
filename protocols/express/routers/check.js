'use strict';

module.exports = [
    {
        method: 'post',
        endpoint: '/tracksite',
        fileField: null,
        fileObjArray: 'none',
        handlers: [
            'TrackSiteInterface.checkSiteStatus',
            'TrackSiteInterface.insertURLSite',
            'TrackSiteInterface.getListURLSite'
        ]
    },
    {
        method: 'get',
        endpoint: '/tracksite',
        fileField: null,
        fileObjArray: 'none',
        handlers: [
            'TrackSiteInterface.getListURLSite',
            'TrackSiteInterface.updateAndGetSite',
            'TrackSiteInterface.getListURLSite'
        ]
    },
    {
        method: 'delete',
        endpoint: '/tracksite',
        fileField: null,
        fileObjArray: 'none',
        handlers: [
            'TrackSiteInterface.deleteSite',
            'TrackSiteInterface.getListURLSite'
        ]
    }
];
