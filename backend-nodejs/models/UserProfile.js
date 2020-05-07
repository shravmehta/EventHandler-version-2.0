/**
* properties:
* User ID or User to associate this UserProfile object to the user
* a list containing UserConnection objects for this user
* */

class UserProfile {
    /*
    * We can Either use constructor to set the values or Setters as Defined Below
    */
    constructor(userId, userConnections) {
        this._userId = userId;
        this._userConnections = userConnections;
    }

    get userId() {
        return this._userId;
    }

    set userId(value) {
        this._userId = value;
    }

    get UserConnections() {
        return this._userConnections;
    }

    set UserConnections(value) {
        this._userConnections = value;
    }

    getUserConnectionIds() {
        let connectionIds;
        if(this._userConnections !== undefined && this._userConnections.length > 0) {
            connectionIds = this._userConnections.map(connection => connection.ConnectionObject.ConId);
        }
        return connectionIds
    };
}

module.exports.UserProfile = UserProfile;
