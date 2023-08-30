var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var TableFactory = /** @class */ (function () {
    function TableFactory() {
        this._tablesMap = new Map();
        this._tablesMap.set('BigTable', new BigTable());
        this._tablesMap.set('MediumTable', new MediumTable());
        this._tablesMap.set('SmallTable', new SmallTable());
    }
    TableFactory.prototype.getTable = function (table) {
        if (this._tablesMap.has(table)) {
            return this._tablesMap.get(table);
        }
        else {
            throw new Error('Wrong table type');
        }
    };
    return TableFactory;
}());
var Table = /** @class */ (function () {
    function Table() {
        this.height = 0;
        this.width = 0;
        this.depth = 0;
    }
    Table.prototype.getDimensions = function () {
        return {
            width: this.width,
            depth: this.depth,
            height: this.height
        };
    };
    return Table;
}());
var SmallTable = /** @class */ (function (_super) {
    __extends(SmallTable, _super);
    function SmallTable() {
        var _this = _super.call(this) || this;
        _this.height = 40;
        _this.width = 40;
        _this.depth = 40;
        return _this;
    }
    SmallTable.prototype.getTotalTables = function () {
        return 100;
    };
    return SmallTable;
}(Table));
var MediumTable = /** @class */ (function (_super) {
    __extends(MediumTable, _super);
    function MediumTable() {
        var _this = _super.call(this) || this;
        _this.height = 60;
        _this.width = 60;
        _this.depth = 60;
        return _this;
    }
    MediumTable.prototype.getTotalTables = function () {
        return 101;
    };
    return MediumTable;
}(Table));
var BigTable = /** @class */ (function (_super) {
    __extends(BigTable, _super);
    function BigTable() {
        var _this = _super.call(this) || this;
        _this.height = 80;
        _this.width = 80;
        _this.depth = 80;
        return _this;
    }
    BigTable.prototype.getTotalTables = function () {
        return 102;
    };
    return BigTable;
}(Table));
var tableFactory = new TableFactory();
var table = tableFactory.getTable('SmallTable');
console.log(table.getDimensions());
console.log(table.getTotalTables());
