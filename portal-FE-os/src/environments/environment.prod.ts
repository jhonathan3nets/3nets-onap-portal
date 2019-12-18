export const environment = {
  production: true,
  "api": {
    "singleAppInfo": "portalApi/singleAppInfo",
    "singleAppInfoById": "portalApi/singleAppInfoById",
    "syncRolesFromExternalAuthSystem": "portalApi/syncRoles",
    "syncFunctionsFromExternalAuthSystem": "portalApi/syncFunctions",
    "userApps": "portalApi/userApps/",
    "persUserApps": "portalApi/persUserApps",
    "appCatalog": "portalApi/appCatalog",
    "accountAdmins": "portalApi/accountAdmins",
    "availableApps": "portalApi/availableApps",
    "allAvailableApps": "portalApi/allAvailableApps",
    "externalRequestAccessSystem": "portalApi/externalRequestAccessSystem",
    "userProfile": "portalApi/userProfile",
    "queryUsers": "portalApi/queryUsers",
    "adminAppsRoles": "portalApi/adminAppsRoles",
    "adminApps": "portalApi/adminApps",
    "appsForSuperAdminAndAccountAdmin": "portalApi/appsForSuperAdminAndAccountAdmin",
    "accountUsers": "portalApi/app/:appId/users",
    "saveNewUser": "portalApi/saveNewUser",
    "userAppRoles": "portalApi/userAppRoles",
    "onboardingApps": "portalApi/onboardingApps",
    "widgets": "portalApi/widgets",
    "widgetsValidation": "portalApi/widgets/validation",
    "functionalMenuForAuthUser": "portalApi/functionalMenuForAuthUser",
    "functionalMenuForEditing": "portalApi/functionalMenuForEditing",
    "functionalMenuForNotificationTree": "portalApi/functionalMenuForNotificationTree",
    "functionalMenu": "portalApi/functionalMenu",
    "functionalMenuItemDetails": "portalApi/functionalMenuItemDetails/:menuId",
    "appRoles": "portalApi/appRoles/:appId",
    "appThumbnail": "portalApi/appThumbnail/:appId",
    "functionalMenuItem": "portalApi/functionalMenuItem",
    "regenerateFunctionalMenuAncestors": "portalApi/regenerateFunctionalMenuAncestors",
    "listOfApp": "portalApi/getAppList",
    "setFavoriteItem": "portalApi/setFavoriteItem",
    "getFavoriteItems": "portalApi/getFavoriteItems",
    "removeFavoriteItem": "portalApi/removeFavoriteItem/:menuId",
    "ping": "portalApi/ping",
    "functionalMenuStaticInfo": "portalApi/functionalMenuStaticInfo",
    "portalAdmins": "portalApi/portalAdmins",
    "portalAdmin": "portalApi/portalAdmin",
    "getManifest": "portalApi/manifest",
    "getActiveUser": "portalApi/dashboard/activeUsers",
    "getSearchAllByStringResults": "portalApi/dashboard/search",
    "commonWidget": "portalApi/dashboard/widgetData",
    "deleteCommonWidget": "portalApi/dashboard/deleteData",
    "getContactUS": "portalApi/contactus/list",
    "getAppsAndContacts": "portalApi/contactus/allapps",
    "saveContactUS": "portalApi/contactus/save",
    "deleteContactUS": "portalApi/contactus/delete",
    "getContactUSPortalDetails": "portalApi/contactus/feedback",
    "getAppCategoryFunctions": "portalApi/contactus/functions",
    "onlineUserUpdateRate": "portalApi/dashboard/onlineUserUpdateRate",
    "storeAuditLog": "portalApi/auditLog/store",
    "leftmenuItems": "portalApi/leftmenuItems",
    "getFunctionalMenuRole": "portalApi/getFunctionalMenuRole",
    "getNotifications": "portalApi/getNotifications",
    "getAdminNotifications": "portalApi/getAdminNotifications",
    "getAllAppRoleIds": "portalApi/getNotificationAppRoles",
    "getNotificationHistory": "portalApi/getNotificationHistory",
    "notificationUpdateRate": "portalApi/notificationUpdateRate",
    "notificationRead": "portalApi/notificationRead",
    "saveNotification": "portalApi/saveNotification",
    "getMessageRecipients": "portalApi/getMessageRecipients",
    "getNotificationRoles": "portalApi/notificationRole",
    "getRole": "portalApi/get_role",
    "getRoles": "portalApi/get_roles/:appId",
    "toggleRole": "portalApi/role_list/toggleRole",
    "removeRole": "portalApi/role_list/removeRole",
    "saveRole": "portalApi/role/saveRole/:appId",
    "toggleRoleRoleFunction": "portalApi/role/removeRoleFunction.htm",
    "addRoleRoleFunction": "portalApi/role/addRoleFunction.htm",
    "toggleRoleChildRole": "portalApi/role/removeChildRole.htm",
    "addRoleChildRole": "portalApi/role/addChildRole.htm",
    "getRoleFunctions": "portalApi/get_role_functions/:appId",
    "saveRoleFunction": "portalApi/role_function_list/saveRoleFunction/:appId",
    "removeRoleFunction": "portalApi/role_function_list/removeRoleFunction/:appId",
    "userAppsOrderBySortPref": "portalApi/userAppsOrderBySortPref",
    "userAppsOrderByName": "portalApi/userAppsOrderByName",
    "saveUserAppsSortingPreference": "portalApi/saveUserAppsSortingPreference",
    "userAppsSortTypePreference": "portalApi/userAppsSortTypePreference",
    "userAppsOrderByLastUsed": "portalApi/userAppsOrderByLastUsed",
    "userAppsOrderByMostUsed": "portalApi/userAppsOrderByMostUsed",
    "userAppsOrderByManual": "portalApi/userAppsOrderByManual",
    "saveUserAppsSortingManual": "portalApi/saveUserAppsSortingManual",
    "saveUserWidgetsSortManual": "portalApi/saveUserWidgetsSortManual",
    "updateWidgetsSortPref": "portalApi/updateWidgetsSortPref",
    "UpdateUserAppsSortManual": "portalApi/UpdateUserAppsSortManual",
    "widgetCatalogSelection": "portalApi/widgetCatalogSelection",
    "widgetCommon": "portalApi/microservices",
    "appCatalogRoles": "portalApi/appCatalogRoles",
    "saveUserAppRoles": "portalApi/saveUserAppRoles",
    "userApplicationRoles": "portalApi/userApplicationRoles",
    "microserviceProxy": "portalApi/microservice/proxy",
    "getUserAppsWebAnalytics": "portalApi/getUserAppsWebAnalytics",
    "getWebAnalyticsOfApp": "portalApi/getWebAnalyticsOfApp",
    "basicAuthAccount": "portalApi/basicAuthAccount",
    "addWebAnalyticsReport": "portalApi/addWebAnalyticsReport",
    "getUserJourneyAnalyticsReport": "portalApi/getUserJourneyAnalyticsReport",
    "deleteWebAnalyticsReport": "portalApi/deleteWebAnalyticsReport",
    "getAllWebAnalytics": "portalApi/getAllWebAnalytics",
    "modifyWebAnalyticsReport": "portalApi/modifyWebAnalyticsReport",
    "appsFullList": "portalApi/appsFullList",
    "ecompTitle": "portalApi/ecompTitle",
    "getRecommendations": "portalApi/getRecommendations",
    "centralizedApps": "portalApi/centralizedApps",
    "getSchedulerId": "portalApi/post_create_new_vnf_change",
    "getTimeslotsForScheduler": "portalApi/get_time_slots",
    "postSubmitForApprovedTimeslots": "portalApi/submit_vnf_change_timeslots",
    "getPolicy": "portalApi/get_policy",
    "getSchedulerConstants": "portalApi/get_scheduler_constant",
    "uploadRoleFunction": "portalApi/uploadRoleFunction/:appId",
    "checkIfUserIsSuperAdmin": "portalApi/checkIfUserIsSuperAdmin",
    "getCurrentLang": "auxapi/languageSetting/user/:loginId",
    "getLanguages": "auxapi/language",
    "updateLang": "auxapi/languageSetting/user/:loginId"
},
"cookieDomain": "att.com"
};
