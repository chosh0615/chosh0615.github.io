"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var construct_1 = require('../model/construct');
var property_1 = require('../model/property');
var PropertyService = (function () {
    function PropertyService() {
    }
    PropertyService.prototype.getSources = function () {
        return [
            new construct_1.Construct("Source", "com.sean.source.HdfsSource", "HDFS Source", []),
            new construct_1.Construct("Source", "com.sean.source.FtpSource", "FTP Source", [])
        ];
    };
    PropertyService.prototype.getWriters = function () {
        return [
            new construct_1.Construct("Writer", "com.sean.writer.HdfsWriter", "Import Writer", [])
        ];
    };
    PropertyService.prototype.getProperties = function (className) {
        console.log("Getting properties for " + className);
        if (className == "")
            return [];
        else if (className == "com.sean.source.HdfsSource")
            return [
                new property_1.Property("source.class", "com.sean.source.HdfsSource", "", false),
                new property_1.Property("extract.namespace", "", "sample", true),
                new property_1.Property("source.fs.uri", "", "hdfs://", true)
            ];
        else if (className == "com.sean.source.FtpSource")
            return [
                new property_1.Property("source.class", "com.sean.source.FtpSource", "", false),
                new property_1.Property("extract.namespace", "", "sample", true),
                new property_1.Property("extract.files.directory", "", "/path/", true)
            ];
        else
            return [
                new property_1.Property("writer.class", "com.sean.writer.HdfsSource", "", false),
                new property_1.Property("name", "", "sample", true)
            ];
    };
    PropertyService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], PropertyService);
    return PropertyService;
}());
exports.PropertyService = PropertyService;
//# sourceMappingURL=property.service.js.map