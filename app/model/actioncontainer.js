"use strict";
var ActionContainer = (function () {
    function ActionContainer(key, parent, name, actionId, source, action) {
        this.key = key;
        this.parent = parent;
        this.name = name;
        this.actionId = actionId;
        this.source = source;
        this.action = action;
    }
    return ActionContainer;
}());
exports.ActionContainer = ActionContainer;
//# sourceMappingURL=actioncontainer.js.map