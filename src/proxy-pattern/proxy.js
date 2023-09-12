var RealDatabase = /** @class */ (function () {
    function RealDatabase() {
        this.data = {};
    }
    RealDatabase.prototype.getData = function (id) {
        console.log("RealDatabase: Fetching data for ID ".concat(id.toString()));
        return this.data[id];
    };
    RealDatabase.prototype.setData = function (id, value) {
        console.log("RealDatabase: Setting data for ID ".concat(id.toString()));
        this.data[id] = value;
    };
    return RealDatabase;
}());
var DatabaseProxy = /** @class */ (function () {
    function DatabaseProxy() {
        this.retrievedData = {};
        this.realDatabase = new RealDatabase();
    }
    DatabaseProxy.prototype.getData = function (id) {
        if (this.retrievedData[id] === undefined) {
            console.log("DatabaseProxy: Caching data for ID ".concat(id.toString()));
            this.retrievedData[id] = this.realDatabase.getData(id);
        }
        return this.retrievedData[id];
    };
    DatabaseProxy.prototype.setData = function (id, value) {
        console.log("DatabaseProxy: Setting data for ID ".concat(id.toString()));
        this.realDatabase.setData(id, value);
        this.retrievedData[id] = value;
    };
    return DatabaseProxy;
}());
// Client code
var databaseProxy = new DatabaseProxy();
databaseProxy.setData(1, 'Hello World!');
console.log(databaseProxy.getData(1)); // Note: RealDatabase called here
databaseProxy.setData(2, 'Goodbye World!');
console.log(databaseProxy.getData(2)); // Note: RealDatabase called here
console.log(databaseProxy.getData(1)); // Note: No call to RealDatabase here
